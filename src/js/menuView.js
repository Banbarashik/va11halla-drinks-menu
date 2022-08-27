import View from './View';
import { capitalizeFirstLetter } from './helper';
import BTCicon from './../assets/images/BTC_icon.jpg';

class menuView extends View {
  _data;

  addHandlerRenderSubcategoriesAndDrinks(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const categoryEl = e.target.closest('.menu__category');
      const subcategoryEl = e.target.closest('.menu__subcategory');

      if (!categoryEl && !subcategoryEl) return;

      const category = categoryEl?.dataset.category;
      const subcategory = subcategoryEl?.dataset.subcategory;

      handler(category, subcategory);
    });
  }

  _generateMarkup() {
    return `
      <div class="menu__interface">
        <div class="menu__welcome-window ${
          this._data.currentCategory ? 'hidden' : ''
        }">
          <img src="${BTCicon}" alt="BTC recipe book">
          <div>
            <p>Welcome to VA-11 HALL-A.</p>
            <p>Use the navigation bar to start browsing.</p>
          </div>
        </div>
        <ul class="menu__navigation-bar">
          <li class="menu__category ${
            this._data.currentCategory === 'name' ? 'active' : ''
          }" data-category="name">By Name</li>
          <li class="menu__category ${
            this._data.currentCategory === 'flavor' ? 'active' : ''
          }" data-category="flavor">By Flavor</li>
          <li class="menu__category ${
            this._data.currentCategory === 'type' ? 'active' : ''
          }" data-category="type">By Type</li>
        </ul>
        <div class="menu__main-frame">
          <div class="menu__subcategories">
          <p class="menu__search-by ${
            this._data.currentCategory ? '' : 'hidden'
          }">
            <span>Search by:</span>
            <span>
              ${capitalizeFirstLetter(this._data.currentCategory)}
            </span>
          </p>
          <ul class="menu__subcategories-list ${
            this._data.currentCategory === 'name'
              ? 'menu__subcategories-name'
              : ''
          }">
            ${this._generateMarkupSubcategories()}
          </ul>
          </div>
          <div class="menu__drinks">
            <ul class="menu__drinks-list">
              ${this._generateMarkupDrinks()}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  _generateMarkupSubcategories() {
    const subcategoryArr = this._data.categories[this._data.currentCategory];

    if (!subcategoryArr) return '';

    return subcategoryArr
      .map(sub => {
        return `
          <li>
            <span class="menu__subcategory ${
              this._data.currentSubcategory === sub ? 'active' : ''
            }" data-subcategory="${sub}">
            ${capitalizeFirstLetter(sub)}
            ${this._data.currentCategory !== 'name' ? 'Drinks' : ''}
            </span>
          </li>
        `;
      })
      .join('');
  }

  _generateMarkupDrinks() {
    return this._createFilteredDrinksArr()
      .map(
        function (drink) {
          return `
            <li class="menu__drink">
            <img
              class="menu__drink-img"
              src="${drink.image}"
              alt="${drink.name}"
            />
            <p class="menu__drink-header">
              <span class="menu__drink-name">${drink.name}</span> - <span>$${
            drink.price
          }</span>
            </p>
            <p class="menu__drink-ingredients">
              A ${drink.name} is
              ${this._generateMarkupIngredients(drink.ingredients)}.
              All ${this._generateMarkupDrinkOptions(drink.options)}.
            </p>
            <p class="menu__drink-description">
              "${drink.description}"
            </p>
            <p class="menu__drink-categories">${drink.categories
              .join(', ')
              .replace(/\b\w/g, c => c.toUpperCase())}
            </p>
            </li>
          `;
        }.bind(this)
      )
      .join('');
  }

  _generateMarkupIngredients(ingrs) {
    return ingrs
      .map(function (ingr, i, arr) {
        const className = ingr.name.replace(' ', '_').toLowerCase();

        return `
          ${i === arr.length - 1 ? ' and' : ''}
          <span class="${className}">
          ${ingr.quantity ? `${ingr.quantity}` : 'optional'}
          ${ingr.name}</span>${i < arr.length - 2 ? ', ' : ''}
        `;
      })
      .join('')
      .trim();
  }

  _generateMarkupDrinkOptions(opts) {
    return `
      ${opts.aged && opts.onTheRocks ? 'aged,' : opts.aged ? 'aged and' : ''}
      ${opts.onTheRocks ? 'on the rocks and' : ''}
      ${opts.mixed ? 'mixed' : 'blended'}
    `.trim();
  }

  _createFilteredDrinksArr() {
    const currentCategory = this._data.currentCategory;
    const currentSubcategory = this._data.currentSubcategory;

    return this._data.drinks.filter(drink => {
      if (currentCategory === 'name') {
        return drink.name[0].toLowerCase() === currentSubcategory.toLowerCase();
      } else {
        return drink.categories.includes(currentSubcategory);
      }
    });
  }
}

export default new menuView();
