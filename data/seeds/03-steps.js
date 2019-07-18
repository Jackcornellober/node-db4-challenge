
exports.seed = function(knex) {
    return knex('steps').insert([
      { recipe_id: 1, step_number: 1, instructions: 'Catch De Bass'},
      { recipe_id: 1, step_number: 2, instructions: 'Slap De Bass'},
      { recipe_id: 2, step_number: 1, instructions: 'Buy Tofurkey'},
      { recipe_id: 2, step_number: 2, instructions: 'Heat Tofurkey'},
      { recipe_id: 3, step_number: 1, instructions: 'Mix Ingredients in a bowl'},
      { recipe_id: 3, step_number: 2, instructions: 'Bake mixed ingredients at 400 for 28 minutes'},

    ]);
  };