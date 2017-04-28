import { connect } from 'react-redux'

const mapStateToProps = ({ transactions }) => ({
  transactions
})

module.exports = connect(mapStateToProps)(({ transactions }) => {
  const total = transactions.reduce(({ ammount }, total) => { total += ammount }, 0)
  return <div>
    <span>Total Earned: { total }</span>
  </div>
})
