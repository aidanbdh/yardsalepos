/* globals describe it */
import { expect } from 'chai'
import { reducer } from '../public/reducers/combine-reducers'
import { action } from '../public/actions'

describe('reducers', () => {

  describe('reducer', () => {

    it('does something', () => {
      //Call reducer with an action and save the return obj
      const test = reducer(action)
      expect(test).to.deep.equal({}) //Populate with state objects
    })

  })

})
