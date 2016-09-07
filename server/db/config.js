const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '104.131.138.11',
    user: 'app',
    password: 'surprisejalapeno',
    database: 'app'
  },
  pool: {
    min: 1,
    max: 5
  }
});

knex.schema.hasTable('news').then(result => {
  if (!result) {
    return knex.schema.createTable('news', table => {
      table.increments();
      table.string('title');
      table.integer('rating');
      table.string('source');
      table.timestamps();
      console.log('Table "news" created');
    });
  }
  console.log('Table "news" already exists');
  return 0;
});

exports = knex;
