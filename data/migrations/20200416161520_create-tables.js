
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.text('ingred_name')
        .notNullable()
      tbl.float('quantity')
        .notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_num')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
