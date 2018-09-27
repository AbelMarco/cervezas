const utils = require('../src/utils')
const expect = require('chai').expect
let res

/* global describe it */

describe('Vamos a testear modulo utils', () => {
  describe('Suma', () => {
    it('La suma de dos numeros positivos', () => {
      /*
      res = utils.suma(4, 5)
      if (res !== 9) {
        throw new Error(`Resultado esperado 9 y ha devuelto ${res}`)
      }
      */
      expect(utils.suma(4, 7)).to.equal(10)
    })
  })
  describe('Resta', () => {
    it('La resta de dos numeros positivos', () => {
      res = utils.resta(23, 5)
      if (res !== 18) {
        throw new Error(`Resultado esperado 18 y ha devuelto ${res}`)
      }
    })
  })
  describe('Multiplicacion', () => {
    it('La multiplicacion de dos numeros positivos', () => {
      res = utils.multi(4, 5)
      if (res !== 20) {
        throw new Error(`Resultado esperado 20 y ha devuelto ${res}`)
      }
    })
  })
  describe('Division', () => {
    it('La division de dos numeros positivos', () => {
      res = utils.divi(15, 5)
      if (res !== 3) {
        throw new Error(`Resultado esperado 3 y ha devuelto ${res}`)
      }
    })
  })
})
