import React, { Component } from 'react';
import {connect} from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return(<li>{user.username}</li>)
          })}
          <li>{this.props.userCount}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
