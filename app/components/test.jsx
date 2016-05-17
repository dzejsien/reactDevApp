import React from 'react'
import TaskStore from '../stores/taskStore.js'
import TaskActions from '../actions/taskActions.js'
import Reflux from 'reflux'
import TaskNode from './taskNode.jsx'
import TaskList from './taskList.jsx'
import ListHeader from './ListHeader.jsx'

var Test = React.createClass({
  mixins: [Reflux.connect(TaskStore, 'tasks')],

  getInitialState() {
    return {tasks: []};
  },

  componentWillMount() {
    // and also fetch initial data
    TaskActions.fetchList();

    console.log('will mount');
    console.log(this.state.tasks);
  },

  render() {
    console.log('render');
    console.log(this.state.tasks);
    return (
      <div className="container">
        <div className="page-header" id="banner">
          <ListHeader title="My Tasks" desc="This is my list of tasks" />
          <hr/>
          <TaskList tasks={this.state.tasks}/>
      </div>
    </div>
    )
  }
});

module.exports = Test;
