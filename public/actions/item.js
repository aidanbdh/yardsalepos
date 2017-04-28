module.exports = (date, ammount, category = null) => ({
  type: 'item',
  date,
  ammount,
  category
})
