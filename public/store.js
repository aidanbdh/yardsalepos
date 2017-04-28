import { createStore } from 'redux'
import reducer from './reducers/combine-reducers.js'

const store = createStore(reducer)

module.exports = store
