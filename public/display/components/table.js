const React = require('react')
const { connect } = require('react-redux')
const Item = require('../../actions/item.js')

const mapStateToProps = ({ transactions }) => ({
  transactions
})

const mapDispatchToProps = dispatch => ({
  add: (date, ammount, category, otherCategory, time) => {
    dispatch(Item(date, ammount, category, otherCategory, time))
  }
})

let date
let time
let ammount
let category
let otherCategory

module.exports = connect(mapStateToProps, mapDispatchToProps)(({ transactions, add }) => {
  const submit = event => {
    event.preventDefault()
    add(date, ammount, category, otherCategory, time)
  }
  return <div>
    <ul>
      {
        transactions.map(({ date, ammount, category, otherCategory, time }, index) =>
          <li key={ index }>{ index+1 } | { date.get('month') + 1 }/{ date.get('date') }/{ date.get('year') } | { time ?time + '|' :'' } { ammount } { category ?' | ' + category :'' }{ otherCategory ?' | ' + otherCategory :'' }</li>
        )
      }
    </ul>
    <form onSubmit={ submit }>
      <label>Date(MM/DD/YYYY): <input type='text' required onChange={ ({ target }) => { date = target.value } }></input></label>
      <label>Time: <input type='text' onChange={ ({ target }) => { time = target.value } }></input></label>
      <label>Ammount: <input type='text' required onChange={ ({ target }) => { ammount = target.value } }></input></label>
      <label>Category: <input type='text' onChange={ ({ target }) => { category = target.value } }></input></label>
      <label>Other Category: <input type='text' onChange={ ({ target }) => { otherCategory = target.value } }></input></label>
      <button type='submit'>Enter</button>
    </form>
  </div>
})
