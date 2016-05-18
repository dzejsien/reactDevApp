import React from 'react'
import Reflux from 'reflux'
import UserStore from '../stores/userStore.js'
import UserActions from '../actions/userActions.js'
import UserNode from './userNode.jsx'
import UserList from './userList.jsx'
import ListHeader from './ListHeader.jsx'

var Users = module.exports = React.createClass({
  mixins: [Reflux.connect(UserStore, 'users')],
  getInitialState() {
    return {users: []};
  },

  componentWillMount() {
    UserActions.fetchList();
  },

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <ListHeader title="users" desc="It's list of users in the system"/>
          <hr/>
          <UserList users={this.state.users} />
        </div>
      </div>
    )
  }
});
