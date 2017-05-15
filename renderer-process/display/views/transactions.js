const React = require('react')
const connect = require('react-redux')
const Table = require('../components/table.js')
const Totals = require('../components/totals.js')
const Download = require('../components/download.js')
const Analytics = require('../components/analytics.js')

module.exports = () =>
    <div>
      <Table/>
      <Totals/>
      <Analytics/>
      <Download/>
    </div>
