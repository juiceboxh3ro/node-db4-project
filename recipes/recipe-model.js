const db = require('../data/db-config')

module.exports = {
  getRecipes, getShoppingList, getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(id) {
  /*
  SELECT r.recipe_name, i.ingred_name AS 'ingredient_name', i.quantity
  FROM recipes AS r
  JOIN ingredients AS i ON i.recipe_id = 2
  WHERE r.id = 2
  */

  return db('recipes AS r')
  .join('ingredients AS i', 'i.recipe_id', 'r.id')
  .select('r.recipe_name', 'i.ingred_name', 'i.quantity')
  .where('r.id', id)
}

function getInstructions(id) {
  return db('recipes AS r')
  .join('steps AS s', 's.recipe_id', 'r.id')
  .select('r.recipe_name', 's.instructions', 's.step_num')
  .where('r.id', id)
  .orderBy('s.step_num')
}