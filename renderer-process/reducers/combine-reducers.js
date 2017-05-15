const init = require('../actions/init.js')
const items = require('./items.js')

module.exports = (state = init, action) => {
  return Object.assign({}, state,
    items(state, action)
  )
}
