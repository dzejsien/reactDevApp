import Reflux from 'reflux';
import TaskActions from '../actions/taskActions.js';

var TaskStore = module.exports = Reflux.createStore({
  tasks: [],
  listenables: [TaskActions],
  init: function() {
    //this.fetchList();
  },

  fetchList: function() {
    this.tasks = [1,2,3,4];
    console.log('tasks in store');
    this.trigger(this.tasks);
  }
});
