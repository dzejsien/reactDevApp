import Reflux from 'reflux';
import UserActions from '../actions/userActions.js';

var UserStore = module.exports = Reflux.createStore({
  users: [],
  listenables: [UserActions],

  fetchListCompleted: function(data) {
    this.users = data;
    this.trigger(this.users);
  },

  fetchUsersListCompleted: function(data) {
    this.users = data;
    this.trigger(this.users);
  }
});
