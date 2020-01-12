import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';


class Users extends Component {

  render() {
    let users= this.props.users.map((user,index) => <li key={index}  > {user.username}</li>)
    return (
      <div>
        <ul>
          Users!
        {users}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {
    users: state.users,
   userCount: state.users.length 
  }
}

// connect this component to Redux
export default connect(mapStateToProps)( Users) 
