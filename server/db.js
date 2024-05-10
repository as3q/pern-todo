const Pool = require("pg").Pool;

require('dotenv').config();

const pool = new Pool({
    user: "postgres",
    password: "f7%FDz0i0%St",
    host: "localhost",
    port: "5432",
    database: "perntodo"
});

module.exports = pool;