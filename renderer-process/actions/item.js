module.exports = (date, ammount, category = null, otherCategory = null, time = 0) => ({
  type: 'item',
  date,
  time,
  ammount,
  category,
  otherCategory
})
