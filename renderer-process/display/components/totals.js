const React = require('react')
const { connect } = require('react-redux')

const mapStateToProps = ({ transactions }) => ({
  transactions
})

module.exports = connect(mapStateToProps)(({ transactions }) => {
  const total = transactions.concat().reduce((total, { ammount }) => {
    total += ammount }, 0)
  return <div>
    <span>Total Earned: { total }</span>
  </div>
})
