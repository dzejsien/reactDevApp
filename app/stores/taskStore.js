import Reflux from 'reflux';
import TaskActions from '../actions/taskActions.js';

var TaskStore = module.exports = Reflux.createStore({
  tasks: [],
  listenables: [TaskActions],

  fetchListCompleted: function(data) {
    this.tasks = data;
    this.trigger(this.tasks);
  },

  fetchUsersListCompleted: function(data) {
    this.tasks = data;
    this.trigger(this.tasks);
  },

  closeCompleted: function(data) {
    this.trigger(this.tasks);
  },

  addCompleted: function(data) {
    if (data.isEdition == true) {
      TaskActions.fetchList();
    }
    else {
        this.tasks = this.tasks.concat(data.model);
    }

    this.trigger(this.tasks);
  }
});
