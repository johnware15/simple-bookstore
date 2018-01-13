import db from '../connection.js'

function logIn() {
  db.oneOrNone(`SELECT * FROM users WHERE email=$1 AND password=$2`, [email, password])
    .then(result => result.rows)
    .catch(error => error)
}

module.exports = logIn
