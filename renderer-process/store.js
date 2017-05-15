const { createStore } = require('redux')
const reducer = require('./reducers/combine-reducers.js')

let store

//if(window) { store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store = createStore(reducer)

module.exports = store
