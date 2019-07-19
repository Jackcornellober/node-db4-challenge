
exports.seed = function(knex) {
    return knex('steps').del()
    .then(() => {
        return knex('steps').insert([
            { recipe_id: 1, step_number: 1, step_text: 'Catch De Bass'},
            { recipe_id: 1, step_number: 2, step_text: 'Slap De Bass'},
            { recipe_id: 2, step_number: 1, step_text: 'Buy Tofurkey'},
            { recipe_id: 2, step_number: 2, step_text: 'Heat Tofurkey'},
            { recipe_id: 3, step_number: 1, step_text: 'Mix Ingredients in a bowl'},
            { recipe_id: 3, step_number: 2, step_text: 'Bake mixed ingredients at 400 for 28 minutes'},
        ]);
    })
};