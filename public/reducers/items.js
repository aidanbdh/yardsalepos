module.exports = (state, action) => {
  switch(action.type) {
    case 'item':
      if(state.transactions.length === 0) return Object.assign({}, state, {
          transactions: [{
            date: action.date,
            ammount: action.ammount
          }]
        })
      return Object.assign({}, state, {
        transactions: state.transactions.splice(state.transactions.length, 0, {
          date: action.date,
          ammount: action.ammount
        })
      })
    default:
      return state
  }
}
