
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipe_ingredients').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipe_ingredients').insert([
          {ingredient_id: 1, recipe_id: 1, quantity: 'One Bass'},
          {ingredient_id: 5, recipe_id: 1, quantity: 'A quarter cup, melted'},
          {ingredient_id: 4, recipe_id: 2, quantity: 'One Roast'},
          {ingredient_id: 7, recipe_id: 2, quantity: '2 cups'},
          {ingredient_id: 2, recipe_id: 3, quantity: 'A pinch'},
          {ingredient_id: 3, recipe_id: 3, quantity: '2 eggs'},
          {ingredient_id: 5, recipe_id: 3, quantity: 'Half a cup, melted'},
          {ingredient_id: 6, recipe_id: 3, quantity: 'One TSP'},
          {ingredient_id: 8, recipe_id: 3, quantity: '3 cups'}
        ]);
      });
  };