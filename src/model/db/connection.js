const pgp = require('pg-promise')()

const connectionString = `postgres://${process.env.USER}@localhost:5432/bookstore`
const db = pgp(connectionString)


module.exports = db
