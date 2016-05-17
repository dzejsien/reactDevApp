import React from 'react'
import TaskStore from '../stores/taskStore.js'
import TaskActions from '../actions/taskActions.js'
import Reflux from 'reflux'
import TaskNode from './taskNode.jsx'
import TaskList from './taskList.jsx'
import ListHeader from './ListHeader.jsx'

var Test = module.exports = React.createClass({
  mixins: [Reflux.connect(TaskStore, 'tasks')],

  handleTaskClosing(task) {
    console.log('closeTask in myTasks');
    task.Status = "Closed";
    TaskActions.close(task);
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
          <ListHeader title="My Tasks" desc="This is my list of tasks" />
          <hr/>
          <TaskList tasks={this.state.tasks} onClosing={this.handleTaskClosing} showCloseButton={true}/>
      </div>
    </div>
    )
  }
});
