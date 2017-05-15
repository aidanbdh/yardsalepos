const React = require('react')
const { connect } = require('react-redux')
const JsPDF = require('jspdf')
const fs = require('fs')

const mapStateToProps = ({ transactions }) => ({ transactions })

module.exports = connect(mapStateToProps)(({ transactions }) => {
  const downloadPDF = () => {
    const pdf = new JsPDF()
    pdf.text = [`Transactions`].push(transactions.map(({ date, ammount, category, time }) =>
      `${ date } | ${ time } | $${ ammount } | ${ category }`
    ))
    fs.writeFile('transactions.pdf', pdf, () => {})
  }
  return <button onClick={ downloadPDF }>Download</button>
})
