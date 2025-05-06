require('dotenv').config();

module.exports = {
  development: {
    username: process.env.NATIONAL_REGISTRY_DB_USER || 'national_user',
    password: process.env.NATIONAL_REGISTRY_DB_PASSWORD || 'national_pass',
    database: process.env.DBNATIONAL_REGISTRY_DB_NAME_NAME || 'national_registry_db',
    host: process.env.NATIONAL_REGISTRY_DB_HOST || 'localhost',
    port: process.env.NATIONAL_REGISTRY_DB_PORT || 5433,
    dialect: 'postgres',
  }
};
