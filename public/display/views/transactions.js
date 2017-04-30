const React = require('react')
const connect = require('react-redux')
const Table = require('../components/table.js')
const Totals = require('../components/totals.js')
const Download = require('../componets/download.js')

module.exports = connect()(
  () =>
    <div>
      <Table/>
      <Totals/>
      <Download/>
    </div>
)
