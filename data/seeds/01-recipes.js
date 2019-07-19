
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Large Mouth Bass'},
        {recipe_name: 'Tofurkey Dinner'},
        {recipe_name: 'Chocolate Cake'}
      ]);
    });
};
