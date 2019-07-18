exports.up = function(knex) {

    return knex.schema
      .createTable('recipes', tbl => {

        tbl.increments();
  
        tbl
          .string('recipe_name', 128)
          .notNullable()
          .unique();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
  
        tbl
          .string('ingredient_name', 128)
          .notNullable()
          .unique();
      })
      .createTable('steps', tbl => {
        tbl.increments();
  
        tbl.string('step_text').notNullable();
  
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT') // what happens if the recipe is deleted
          .onUpdate('CASCADE'); // what happens if the id of the recipe changes
      })
      .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT') // what happens if the ingredient is deleted
          .onUpdate('CASCADE'); // what happens if the id of the ingredient changes

        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients')
          .onDelete('RESTRICT') // what happens if the recipe is deleted
          .onUpdate('CASCADE'); // what happens if the id of the recipe changes
      })
  };
  
  exports.down = function(knex) {};
  
  // return knex.schema.table('recipes', tbl => {
  //   tbl.float('rating');
  // })
  // down tbl.dropColumn('rating');
  
