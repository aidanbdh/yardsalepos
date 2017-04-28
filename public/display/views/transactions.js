const React = require('react')
const connect = require('react-redux')
const Table = require('../components/table.js')

module.exports = connect()(
  () =>
    <div>
      <Table/>
    </div>
)
