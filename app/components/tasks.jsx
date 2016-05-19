import React from 'react'
import TaskStore from '../stores/taskStore.js'
import TaskActions from '../actions/taskActions.js'
import UserStore from '../stores/userStore.js'
import UserActions from '../actions/userActions.js'
import ProjectStore from '../stores/projectStore.js'
import ProjectActions from '../actions/projectActions.js'
import Reflux from 'reflux'
import TaskNode from './taskNode.jsx'
import TaskList from './taskList.jsx'
import ListHeader from './listHeader.jsx'
import TaskForm from './taskForm.jsx'

const emptyTask = {
  id: null,
  subject: null,
  description: null,
  userId: null,
  projectId: null
};

var Tasks = module.exports = React.createClass({
  mixins: [Reflux.connect(TaskStore, 'tasks'), Reflux.connect(UserStore, 'users'), Reflux.connect(ProjectStore, 'projects')],
  handleTaskSubmit(task) {
    TaskActions.add(task);
    this.setState({
      taskToEdit: emptyTask
    });
  },

  getInitialState() {
    return {
      tasks: [],
      users: [],
      projects: [],
      openTaskForm: false,
      taskToEdit: emptyTask
    };
  },

  componentWillMount() {
    TaskActions.fetchList();
    UserActions.fetchList();
    ProjectActions.fetchList();
  },

  handleOpen() {
    this.setState({
      openTaskForm: !this.state.openTaskForm
    });
  },

  beginEdition(task) {
      this.setState({openTaskForm: true, taskToEdit: task});
  },

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <ListHeader title="tasks" desc="Define new or edit existing tasks"/>
          <TaskForm onSubmit={this.handleTaskSubmit} handleOpen={this.handleOpen} users={this.state.users} projects={this.state.projects} open={this.state.openTaskForm} taskToEdit={this.state.taskToEdit}/>
          <hr/>
          <TaskList tasks={this.state.tasks} beginEdition={this.beginEdition} showCloseButton={false} showEditButton={true} />
        </div>
      </div>
    )
  }
});
