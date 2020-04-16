
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          recipe_id: 1,
          instructions: 'Break the eggs',
          step_num: 1
        },
        {
          recipe_id: 1,
          instructions: 'Make scrambled eggs',
          step_num: 2
        },
        {
          recipe_id: 2,
          instructions: 'Microwave the water',
          step_num: 1
        }
      ]);
    });
};
