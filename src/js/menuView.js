import View from './View';

class menuView extends View {
  _data;

  // addHandlerRenderSubcategoriesAndDrinks(handler) {
  //   this._parentElement.addEventListener('click', function (e) {
  //     const categoryEl = e.target.closest('.menu__category');
  //     const subcategoryEl = e.target.closest('.menu__subcategory');

  //     if (!categoryEl && !subcategoryEl) return;

  //     const { category } = categoryEl.dataset;
  //     const { subcategory } = subcategoryEl.dataset;

  //     handler(category, subcategory);
  //   });
  // }

  addHandlerRenderSubcategories(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const categoryEl = e.target.closest('.menu__category');

      if (!categoryEl) return;

      const { category } = categoryEl.dataset;

      handler(category, undefined);
    });
  }

  addHandlerRenderDrinks(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const subcategoryEl = e.target.closest('.menu__subcategory');

      if (!subcategoryEl) return;

      const { subcategory } = subcategoryEl.dataset;

      handler(undefined, subcategory);
    });
  }

  _generateMarkup() {
    return `
      <div class="menu__interface">
        <ul class="menu__navigation-bar">
          <li class="menu__category" data-category="name">By Name</li>
          <li class="menu__category" data-category="flavor">By Flavor</li>
          <li class="menu__category" data-category="type">By Type</li>
        </ul>
        <div class="menu__drinks-display">
          <div class="menu__drinks-category">
          <p class="menu__search-by-category">
            <span>Search by:</span>
            <span class="menu__active-category">
              ${this._data.currentCategory}
            </span>
          </p>
          <ul class="menu__subcategories">
            ${this._generateMarkupCategories()}
          </ul>
          </div>
          <ul class="menu__drinks-list">
            ${this._generateMarkupDrinks()}
          </ul>
        </div>
      </div>
    `;
  }

  _generateMarkupCategories() {
    const subcategoryArr = this._data.categories[this._data.currentCategory];

    if (!subcategoryArr) return;

    return subcategoryArr
      .map(
        sub =>
          `<li><span class="menu__subcategory" data-subcategory="${sub}">${sub} ${
            this._data.currentCategory !== 'name' ? 'Drinks' : ''
          }</span></li>`
      )
      .join('');
  }

  _generateMarkupDrinks() {
    return this._createFilteredDrinksArr()
      .map(
        function (drink) {
          return `
            <li class="menu__drinks-item">
            <img
              class="menu__drinks-item--img"
              src="${drink.image}"
              alt="${drink.name}"
            />
            <p class="menu__drinks-item--title-and-price">
              ${drink.name} - $${drink.price}
            </p>
            <p class="menu__drinks-item--ingredients">
              ${this._generateMarkupRecipe(drink)}
            </p>
            <p class="menu__drinks-item--description">
              "${drink.description}"
            </p>
            <p class="menu__drink--categories">${drink.categories.join(
              ', '
            )}</p>
            </li>
          `;
        }.bind(this)
      )
      .join('');
  }

  _generateMarkupRecipe(drink) {
    return `
    A ${drink.name} is ${this._generateMarkupIngredients(
      drink.ingredients
    )}. All ${drink.options.aged ? 'aged' : ''} ${
      drink.options.onTheRocks ? 'on the rocks' : ''
    } ${drink.options.mixed ? 'mixed' : 'blended'}
    `;
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
