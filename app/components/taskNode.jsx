import React from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap'
import TaskToEditActions from '../actions/taskToEditActions.js'

export default class TaskNode extends React.Component {
  constructor() {
    super();
    this.closeTask = this.closeTask.bind(this);
    this.beginEdition = this.beginEdition.bind(this);
  }

  closeTask() {
    var task = this.props.task;
    this.props.onClosing(task);
  }

  beginEdition() {
      this.props.beginEdition();
      TaskToEditActions.startEdition(this.props.task);
  }

  render() {
    var task = this.props.task;

    return (
      <Panel header={task.Subject + (task.Status == "Closed" ? ' (Closed)' : "")} bsStyle="primary">
        <p>Project: {task.Project.Name}</p>
        <p>Assigned to: {task.User.FullName}</p>
        <p>Description: {task.Description}</p>
        <ButtonToolbar>
          {task.Status == "Open" && this.props.showCloseButton == true
            ? <Button bsStyle="success" onClick={this.closeTask}>Close</Button>
            : null}
            {task.Status == "Open" && this.props.showEditButton == true
              ? <Button bsStyle="success" onClick={this.beginEdition}>Edit</Button>
              : null}
        </ButtonToolbar>
      </Panel>
    )
  }
}
