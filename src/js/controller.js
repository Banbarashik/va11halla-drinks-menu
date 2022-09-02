import './../sass/main.scss';

import * as model from './model';
import homepageView from './homepageView';
import menuView from './menuView';

function controlHomepage() {
  model.setCurrentCategory();
  model.setCurrentSubcategory();

  homepageView.render(model.state.staff);
  homepageView.addHandlerToggleEntrance();
}

function controlMenu(category, subcategory) {
  if (category) model.setCurrentCategory(category);
  if (subcategory) model.setCurrentSubcategory(subcategory);

  menuView.render(model.state.menu);
}

function init() {
  controlHomepage();

  homepageView.addHandlerRenderMenu(controlMenu);
  menuView.addHandlerRenderSubcategoriesAndDrinks(controlMenu);
  menuView.addHandlerReturnToStreet(controlHomepage);
}

init();
