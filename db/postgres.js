const { Pool } = require('pg');
require('dotenv').config();

// console.log('nodeenv', process.env.NODE_ENV);

const DATABASE = process.env.NODE_ENV === 'test' ? 'testdb' : 'sdc_reviews';
// const DATABASE = 'sdc_reviews';

var connectionString = `postgres://postgres:jasoncarr@localhost:5432/${DATABASE}`;
const pool = new Pool({
  connectionString: connectionString
});

// console.log('connect', connectionString);

pool.connect();

module.exports = pool;


// const { Client } = require('pg');

// var connectionString = "postgres://postgres:jasoncarr@localhost:5432/sdc_reviews";
// const client = new Client({
//   connectionString: connectionString
// });

// client.connect();

// module.exports = client;
