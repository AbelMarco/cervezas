const cervezas = require('./cervezas.json')
const random = require('unique-random-array')

module.exports = {
  todas: cervezas,
  alAzar: random(cervezas)
}
