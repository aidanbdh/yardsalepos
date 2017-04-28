const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const store = require('../store')
const Transactions = require('./views/transactions.js')

render (
  <Provider store={ store }>
    <Transactions/>
  </Provider>,
  document.getElementById('app')
)
