import '../sass/main.scss';

import * as model from './model';
import homepageView from './homepageView';
import menuView from './menuView';

function controlHomepage() {
  menuView.render(model.state.menu);
}

function controlMenu(category, subcategory) {
  if (category) model.setCurrentCategory(category);
  if (subcategory) model.setCurrentSubcategory(subcategory);

  menuView.render(model.state.menu);
}

function init() {
  homepageView.render();
  homepageView.addHandlerRenderMenu(controlHomepage);
  menuView.addHandlerRenderSubcategoriesAndDrinks(controlMenu);
}

init();
