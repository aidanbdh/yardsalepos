import { connect } from 'react-redux'
import Moment from 'moment'
Moment().format()
import Item from '../../actions/item.js'

const mapStateToProps = ({ transactions }) => ({
  transactions
})

const mapDispatchToProps = dispatch => ({
  add: (date, ammount, category, time) => {
    dispatch(new Item(new Moment(date), ammount, category, time))
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(({ transactions, add }) => {
  let date
  let time
  let ammount
  let category
  let otherCategory
  const submit = event => {
    event.preventDefault()
    add(date, ammount, category, otherCategory, time)
  }
  return <div>
    <ul>
      {
        transactions.map(({ date, ammount, category, otherCategory, time }, index) => {
          return <li>{ index+1 } | { date } | { time || '' } | { ammount } | { category || '' } | { otherCategory || '' }</li>
        })
      }
    </ul>
    <form onSubmit={ submit }>
      <label>Date: <input type='text' value={ date }></input></label>
      <label>Time(hrmn): <input type='text' value={ time }></input></label>
      <label>Ammount: <input type='text' value={ ammount }></input></label>
      <label>Category: <input type='text' value={ category }></input></label>
      <label>Other Category: <input type='text' value={ otherCategory }></input></label>
      <button type='submit'>Enter</button>
    </form>
  </div>
})
