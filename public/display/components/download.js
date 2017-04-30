import { connect } from 'react-redux'
import jsPDF from 'jspdf'
import fs from 'fs'

const mapStateToProps = ({ transactions }) => ({ transactions })

module.exports = connect(mapStateToProps)(({ transactions }) => {
  const downloadPDF = () => {
    const pdf = new jsPDF()
    pdf.text = [`Transactions`].push(transactions.map(({ date, ammount }) =>
      `${ date } | $${ ammount }`
    ))
    fs.writeFile('transactions.pdf', pdf, () => {})
  }
  return <button onClick={ downloadPDF }>Download</button>
})
