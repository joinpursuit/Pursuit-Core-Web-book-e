const pgp = require('pg-promise')()
const cs = 'postgres://localhost/booke'
const db = pgp(cs)

module.exports = db
