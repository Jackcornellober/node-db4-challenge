const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  // returns a list of the recipes
  return db('recipes');
}

function getShoppingList(id) {
  // return the recipe if found or null if not found
  return db('recipes')
}

function getInstructions(id) {
  return db('instructions')

}

