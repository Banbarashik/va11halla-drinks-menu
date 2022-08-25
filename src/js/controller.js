import '../sass/main.scss';

import * as model from './model';
import homepageView from './homepageView';
import menuView from './menuView';

function controlMenu(category, subcategory) {
  if (category) model.setCurrentCategory(category);
  if (subcategory) model.setCurrentSubcategory(subcategory);
  // model.setCurrentCategory(category);
  // model.setCurrentSubcategory(subcategory);
  console.log(model.state.menu);

  menuView.render(model.state.menu);
}

function init() {
  // homepageView.render();
  menuView.render(model.state.menu);
  menuView.addHandlerRenderSubcategories(controlMenu);
  menuView.addHandlerRenderDrinks(controlMenu);
  // menuView.addHandlerRenderSubcategoriesAndDrinks(controlMenu);
}

init();
