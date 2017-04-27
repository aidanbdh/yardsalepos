import { createStore } from 'redux'
import reducer from './reducers/combine-reducers.js'

module.exports = createStore(reducer)
