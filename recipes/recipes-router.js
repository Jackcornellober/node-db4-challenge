const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/:id/shoppinglist', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.getShoppingList(id);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/:id/steps', async (req, res) => {
  const { id } = req.params;

  try {
    const steps = await Recipes.getInstructions(id);

    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given recipe' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get steps' });
  }
});

module.exports = router;