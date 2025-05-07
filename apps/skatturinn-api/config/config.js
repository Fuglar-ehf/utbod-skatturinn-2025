require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SKATTUR_DB_USER || 'skattur_user',
    password: process.env.SKATTUR_DB_PASSWORD || 'skattur_pass',
    database: process.env.SKATTUR_DB_NAME || 'skattur_db',
    host: process.env.SKATTUR_DB_HOST || 'localhost',
    port: process.env.SKATTUR_DB_PORT || 5432,
    dialect: 'postgres',
  }
};
