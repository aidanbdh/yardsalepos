module.exports = (state, action) => {
  switch(action.type) {
    case 'item':
      if(state.transactions.length === 0) return Object.assign({}, state, {
          transactions: [{
            date: action.date,
            ammount: action.ammount,
            category: action.category
          }]
        })
      return Object.assign({}, state, {
        transactions: state.transactions.splice(state.transactions.length, 0, {
          date: action.date,
          ammount: action.ammount,
          category: action.category
        })
      })
    default:
      return state
  }
}
