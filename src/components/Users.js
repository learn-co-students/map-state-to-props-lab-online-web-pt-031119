import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const renderUser = this.props.users.map(user => {
      return(<li key={user.username}>{user.username}</li>)
    })

    return (
      <div>
        <ul>
          Users!
          {renderUser}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
