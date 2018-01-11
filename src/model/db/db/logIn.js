export default function logIn() {
  db.oneOrNone(`SELECT email, password FROM users RETURNING $1, $2`, [email, password])
    .then(result => result.rows)
    .catch(error => error)
}
