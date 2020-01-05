import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  displayUsers = () => {
    this.props.users.map( u => {
      console.log(u)
    return <p>{u.username}</p>
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( u => {return <li>{u.username}</li>})}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
           userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
