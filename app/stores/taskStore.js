import Reflux from 'reflux';
import TaskActions from '../actions/taskActions.js';

var TaskStore = module.exports = Reflux.createStore({
  tasks: [],
  listenables: [TaskActions],

  fetchListCompleted: function(data) {
    this.tasks = data;
    this.trigger(this.tasks);
  },

  close: function(task) {
    console.log('start closing');
  },

  closeCompleted: function(data) {
    console.log(data);
    console.log('close completed');
    this.trigger(this.tasks);
  },

  addCompleted: function(data) {
    console.log(data);
    console.log('add completed');
    this.trigger(this.tasks);
  }
});
