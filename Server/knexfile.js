;
const databaseData = {
    client: process.env.CLIENT || 'pg',
    connection: process.env.CONNECTION_DB || {
        host: 'localhost',
        port: '5433',
        user: 'tour_user',
        password: '123456',
        database: 'tour_yavirac_db'
    }
};

module.exports = {

    development: {
        migrations: {tableName: 'knex_migrations', directory: './database/migrations'},
        seeds: {directory: './database/seeds'},
        client: databaseData.client,
        connection: databaseData.connection

    },
};
