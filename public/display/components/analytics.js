const React = require('react')
const { connect } = require('react-redux')

const mapStateToProps = ({ analytics }) => ({ analytics })

module.exports = connect(mapStateToProps)(({ analytics }) => {
  return <ul>
    <li> Name | Number | Percent | Ammount </li>
    {
      Object.getOwnPropertyNames(analytics).map((val, index) =>
        <li key={ index }> { val } | { analytics[val].number } | %{ analytics[val].percent } | ${ analytics[val].ammount } </li>
      )
    }
  </ul>
})
