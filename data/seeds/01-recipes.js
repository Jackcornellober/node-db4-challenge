
exports.seed = function(knex) {
    return knex('recipes').insert([
      {recipe_name: 'Large Mouth Bass'},
      {recipe_name: 'Tofurkey'},
      {recipe_name: 'Chocolate Cake'},
    ]);
  };