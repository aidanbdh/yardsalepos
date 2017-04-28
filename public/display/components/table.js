import { connect } from 'react-redux'
import Moment from 'moment'
Moment().format()
import Item from '../../actions/item.js'

const mapStateToProps = ({ transactions }) => ({
  transactions
})

const mapDispatchToProps = dispatch => ({
  add: (date, ammount) => {
    dispatch(new Item(new Moment(date), ammount))
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(({ transactions, add }) =>
  <div>
    <ul>
      {
        transactions.map(({ date, ammount }) => {
          return <li>{ date } | { ammount }</li>
        })
      }
    </ul>
    <label>Date: <input></input></label>
    <label>Ammount: <input></input></label>
    <button onClick={ add() }></button>
  </div>
)
