import Reflux from 'reflux';
import ProjectActions from '../actions/projectActions.js';

var ProjectStore = module.exports = Reflux.createStore({
  projects: [],
  listenables: [ProjectActions],

  fetchListCompleted: function(data) {
    this.projects = data;
    this.trigger(this.projects);
  },

  addCompleted: function(data) {
    console.log(data);
    console.log('add project completed');
    this.projects = this.projects.concat(data);
    this.trigger(this.projects);
  }
});
