import View from './View';

class menuView extends View {
  _generateMarkup() {
    return `
      <div class="menu__interface">
        <ul class="menu__navigation-bar">
          <li class="menu__category">By Name</li>
          <li class="menu__category">By Flavor</li>
          <li class="menu__category">By Type</li>
        </ul>
        <div class="menu__drinks-display"></div>
      </div>
    `;
  }
}

export default new menuView();
