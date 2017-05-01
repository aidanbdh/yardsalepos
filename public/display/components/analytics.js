import { connect } from 'react-redux'

const mapStateToProps = ({ analytics }) => { analytics }

module.exports = connect(mapStateToProps)(({ analytics }) => {
  const display = Object.assign({}, analytics)
  Object.getOwnPropertyNames(display)
  return <ul>
    <li> Name | Number | Percent | Ammount </li>
    {
      Object.getOwnPropertyNames(analytics).map(val =>
        <li> { val } | { analytics[val].number } | %{ analytics[val].percent } | ${ analytics[val].ammount } </li>
      )
    }
  </ul>
})
