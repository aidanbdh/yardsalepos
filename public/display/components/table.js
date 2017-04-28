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
  let category
  const submit = event => {
    event.preventDefault()
    add(date, ammount)
  }
  return <div>
    <ul>
      {
        transactions.map(({ date, ammount, category }, index) => {
          return <li>{ index+1 } | { date } | { ammount } | { category }</li>
        })
      }
    </ul>
    <form onSubmit={ submit }>
      <label>Date: <input type='text' value={ date }></input></label>
      <label>Ammount: <input type='text' value={ ammount }></input></label>
      <label>Category: <input type='text' value={ category }></input></label>
      <button type='submit'>Enter</button>
    </form>
  </div>
})
