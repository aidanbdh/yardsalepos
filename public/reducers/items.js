const moment = require('moment')
moment().format()

module.exports = (state, action) => {
  switch(action.type) {
    case 'item':
      var date = action.date.split('/').map(val => {
        if(val.length === 1) return `0${ val }`
        return val
      })
      action.date = moment([date[2], date[0], date[1]].join('-'))
      var analytics = Object.assign({}, state.analytics)
      if(action.category) {
        if(analytics[action.category]) {
          analytics[action.category].number++
          analytics[action.category].percent = analytics[action.category].number / state.transactions.length * 100
          analytics[action.category].ammount += action.amount
        } else {
          analytics[action.category] = {
            number: 1,
            percent: 1 / state.transactions.length * 100,
            ammount: action.ammount
          }
        }
      }
      if(action.otherCategory) {
        if(analytics[action.otherCategory]) {
          analytics[action.otherCategory].number++
          analytics[action.otherCategory].percent = analytics[action.category].number / state.transactions.length * 100
          analytics[action.otherCategory].ammount += action.amount
        } else {
          analytics[action.otherCategory] = {
            number: 1,
            percent: 1 / state.transactions.length * 100
            +ammount: action.ammount
          }
        }
      }
      if(state.transactions.length === 0) {
        return Object.assign({}, state, {
          transactions: [{
            date: action.date,
            time: action.time,
            ammount: action.ammount,
            category: action.category,
            otherCategory: action.otherCategory
          }],
          analytics
        })}
      return Object.assign({}, state, {
        transactions: state.transactions.concat({
          date: action.date,
          time: action.time,
          ammount: action.ammount,
          category: action.category,
          otherCategory: action.otherCategory
        }),
        analytics
      })
    default:
      return state
  }
}
