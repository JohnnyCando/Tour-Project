exports.up = function (knex, Promise) {
    return knex.schema.withSchema('processes')
        .createTable('surveys', function (table) {
            table.increments('id').unsigned().primary();
            table.integer('user_id').references('id').inTable('persons.users');
            table.integer('question1').notNullable();
            table.integer('question2').notNullable();
            table.integer('question3').notNullable();
            table.integer('question4').notNullable();
            table.integer('question5').notNullable();
            table.integer('question6').notNullable();
            table.integer('question7').notNullable();
            table.integer('question8').notNullable();
            table.integer('question9').notNullable();
            table.integer('question10').notNullable();
            table.timestamps(true, true);
        })

};

exports.down = function (knex, Promise) {
        return knex.schema.withSchema('processes')
            .dropTableIfExists('surveys')
}
