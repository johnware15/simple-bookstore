// export default 
function signUp() {
  db.oneOrNone(`INSERT INTO users (email, password) VALUES ($1, $2)`, [email, password])
    .then(result => result.rows)
    .catch(error => error)
}

module.exports = signUp
