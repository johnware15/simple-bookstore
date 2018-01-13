// export default
import db from '../connection.js'

function signUp(email, password) {
  db.oneOrNone(`INSERT INTO users (email, password) VALUES ($1, $2)`, [email, password])
    .then(result => result.rows)
    .catch(error => error)
}

module.exports = signUp
