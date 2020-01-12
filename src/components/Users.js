import React, { Component } from 'react';
import { connect } from 'react-redux';  
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.user.map((user,index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {this.props.numebrOfUsers}
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

 const mapStateToProps = (state) => {
    return {
      user: state.users,
      numebrOfUsers: state.users.length
    }
  }

// connect this component to Redux
export default connect(mapStateToProps)(Users)
