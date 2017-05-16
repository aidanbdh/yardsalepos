const moment = require('moment')
moment().format()

module.exports = (state, action) => {
  switch(action.type) {
    case 'item':
      var date = action.date.split('/').map(val => {
        if(val.length === 1) return `0${ val }`
        return val
      })
      var time = action.time.indexOf(':') !== -1
        ? action.time.split(':').map(val => {
          if(val.length === 1) return `0${ val }`
          return val
        })
        : action.time.split('').reduceRight((str, val, index) =>
          index === action.time.length - 3
            ? action.time.length === 3
              ? '0' + val + ':' + str
              : val + ':' + str
            : val + str
        , '')
      action.time = time
      action.date = moment([date[2], date[0], date[1]].join('-') + 'T' + time)
      var ammount = action.ammount.split('')
      ammount.indexOf('.') !== -1 ? ammount.splice(ammount.indexOf('.'), 1) : ammount = [ammount, '00']
      action.ammount = parseInt(ammount.join(''), 10)/100
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
        Object.keys(analytics).forEach(val => {
          if(val === action.category || val === action.otherCategory) return
          analytics[val].percent = analytics[val].number / state.transactions.length + 1
        })
      }
      if(action.otherCategory) {
        if(analytics[action.otherCategory]) {
          analytics[action.otherCategory].number++
          analytics[action.otherCategory].percent = analytics[action.category].number / state.transactions.length * 100
          analytics[action.otherCategory].ammount += action.amount
        } else {
          analytics[action.otherCategory] = {
            number: 1,
            percent: 1 / state.transactions.length * 100,
            ammount: action.ammount
          }
        }
        Object.keys(analytics).forEach(val => {
          if(val === action.category || val === action.otherCategory) return
          analytics[val].percent = analytics[val].number / state.transactions.length + 1
        })
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
