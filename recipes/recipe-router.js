const express = require('express');
const Recipes = require('./recipe-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes', data: err });
  });
});

router.get('/:id/ingredients', (req, res) => {
  Recipes.getShoppingList(req.params.id)
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Failed to get list', data: err });
  });
});

router.get('/:id/steps', (req, res) => {
  Recipes.getInstructions(req.params.id)
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Failed to get steps', data: err });
  });
});

module.exports = router;