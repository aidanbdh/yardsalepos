module.exports = (date, ammount, category = null, time = 0) => ({
  type: 'item',
  date,
  time,
  ammount,
  category
})
