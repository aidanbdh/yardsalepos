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

module.exports = connect(mapStateToProps, mapDispatchToProps)(({ transactions, add }) => {
  let date
  let ammount
  const submit = event => {
    event.preventDefault()
    add(date, ammount)
  }
  return <div>
    <ul>
      {
        transactions.map(({ date, ammount }, index) => {
          return <li>{ index+1 } | { date } | { ammount }</li>
        })
      }
    </ul>
    <form onSubmit={ submit }>
      <label>Date: <input type='text' value={ date }></input></label>
      <label>Ammount: <input type='text' value={ ammount }></input></label>
      <button type='submit'></button>
    </form>
  </div>
})
