require("dotenv").config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

module.exports = {  
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite' //talvez o problema esteja aqui..
}
