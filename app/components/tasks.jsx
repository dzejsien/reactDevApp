import React from 'react'
import TaskStore from '../stores/taskStore.js'
import TaskActions from '../actions/taskActions.js'
import Reflux from 'reflux'
import TaskNode from './taskNode.jsx'
import TaskList from './taskList.jsx'
import ListHeader from './ListHeader.jsx'
import TaskForm from './taskForm.jsx'

var Test = module.exports = React.createClass({
  mixins: [Reflux.connect(TaskStore, 'tasks')],
  handleTaskSubmit(task) {
      TaskActions.add(task);
  },

  getInitialState() {
    return {tasks: []};
  },

  componentWillMount() {
    TaskActions.fetchList();
  },

  render() {
    console.log('render');
    console.log(this.state.tasks);
    return (
      <div className="container">
        <div className="page-header">
          <ListHeader title="Tasks" desc="Define new or edit existing tasks"/>
          <TaskForm onTaskSubmit={this.handleTaskSubmit}/>
          <hr/>
          <TaskList tasks={this.state.tasks} showCloseButton={false}/>
        </div>
      </div>
    )
  }
});
