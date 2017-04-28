const React = require('react')
const connect = require('react-redux')
const Table = require('../components/table.js')
const Totals = require('../components/totals.js')

module.exports = connect()(
  () =>
    <div>
      <Table/>
      <Totals/>
    </div>
)
