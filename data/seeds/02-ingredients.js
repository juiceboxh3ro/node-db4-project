
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          recipe_id: 1,
          ingred_name: 'Egg',
          quantity: 2.5
        },
        {
          recipe_id: 2,
          ingred_name: 'Glass of Water',
          quantity: 1
        }
      ]);
    });
};
