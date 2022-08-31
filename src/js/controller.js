import './../sass/main.scss';

import * as model from './model';
import homepageView from './homepageView';
import menuView from './menuView';

function controlHomepage() {
  model.setCurrentCategory();
  model.setCurrentSubcategory();

  homepageView.render();
}

function controlMenu(category, subcategory) {
  if (category) model.setCurrentCategory(category);
  if (subcategory) model.setCurrentSubcategory(subcategory);

  menuView.render(model.state.menu);
}

function init() {
  homepageView.render();
  homepageView.addHandlerRenderMenu(controlMenu);
  menuView.addHandlerRenderSubcategoriesAndDrinks(controlMenu);
  menuView.addHandlerReturnToStreet(controlHomepage);
}

init();
