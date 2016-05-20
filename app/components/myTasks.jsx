import React from 'react'
import TaskStore from '../stores/taskStore.js'
import TaskActions from '../actions/taskActions.js'
import UserStore from '../stores/userStore.js'
import UserActions from '../actions/userActions.js'
import Reflux from 'reflux'
import TaskNode from './taskNode.jsx'
import TaskList from './taskList.jsx'
import ListHeader from './listHeader.jsx'
import {preaperSelectOptions} from '../common.js'

var Test = module.exports = React.createClass({
  mixins: [Reflux.connect(TaskStore, 'tasks'), Reflux.connect(UserStore, 'users')],

  handleTaskClosing(task) {
    task.Status = "Closed";
    TaskActions.close(task);
  },

  getInitialState() {
    return {
      tasks: [],
      users: []
    };
  },

  onSelectUserChange(e) {
    TaskActions.fetchUsersList(e.target.value);
  },

  componentWillMount() {
    TaskActions.fetchUsersList(1);
    UserActions.fetchList();
  },

  render() {
    var selectOptionsUser = this.state.users.map(u => <option key={u.Id} value={u.Id}>{u.FullName}</option>);
    return (
      <div className="container">
        <div className="page-header">
          <ListHeader title="my tasks" desc="This is my list of tasks" />
          <hr/>
          <select className="form-control" value={this.state.selectedUser} onChange={this.onSelectUserChange}>
            {selectOptionsUser}
          </select>
          <hr/>
          <TaskList tasks={this.state.tasks} onClosing={this.handleTaskClosing} showCloseButton={true}/>
      </div>
    </div>
    )
  }
});
