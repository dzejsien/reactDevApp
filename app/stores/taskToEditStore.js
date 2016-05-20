import Reflux from 'reflux';
import TaskToEditActions from '../actions/taskToEditActions.js';
import TaskActions from '../actions/taskActions.js';
import Task from '../common.js'


var TaskStore = module.exports = Reflux.createStore({
  taskToEdit: new Task(),
  listenables: [TaskToEditActions],

  startEdition: function(task) {
    this.taskToEdit = task;
    this.trigger(this.taskToEdit);
  },

  submitEdition: function(task) {
    TaskActions.add(task);
    this.taskToEdit = new Task();
    this.trigger(this.taskToEdit);
  }
});
