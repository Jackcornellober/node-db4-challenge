
exports.seed = function(knex) {
    return knex('steps').insert([
      { ingredient_name: 'Large Mouth Bass'},
      { ingredient_name: 'Salt'},
      { ingredient_name: 'Eggs'},
      { ingredient_name: 'Tofurkey'},
      { ingredient_name: 'Butter'},
      { ingredient_name: 'Vanilla Extract'},
      { ingredient_name: 'Stuffing'},
    ]);
  };