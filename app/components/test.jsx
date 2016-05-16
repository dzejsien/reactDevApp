import React from 'react'
import TaskStore from '../stores/taskStore.js'
import TaskActions from '../actions/taskActions.js'
import Reflux from 'reflux'

var Test = React.createClass({
   mixins: [Reflux.connect(TaskStore, 'tasks')],

   getInitialState() {
    return { tasks: [] };
  },

  componentWillMount: function() {
    // and also fetch initial data
    TaskActions.fetchList();

    console.log('will mount');
    console.log(this.state.tasks);
  },

  render: function() {
    console.log('render');
    console.log(this.state.tasks);
    var tasks = this.state.tasks.map(t => <span>t</span>);

    return (
<div>
        {tasks}
</div>
    );
  }
});

module.exports = Test;
