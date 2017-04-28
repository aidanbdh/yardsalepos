/* globals describe it */
const { expect } = require('chai')
const moment = require('moment')
moment().format()
const reducer = require('../public/reducers/combine-reducers')
const Item = require('../public/actions/item.js')

describe('reducers', () => {

  describe('items', () => {

    it('Adds a new transaction to the state', () => {
      const day = moment('20170427')
      const sale = Item(day, 19.98)
      const test = reducer(undefined, sale)
      expect(test).to.deep.equal({
        transactions: [{ date: day, ammount: 19.98 }]
      })
    })

  })

})
