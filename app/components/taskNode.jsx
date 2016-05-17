import React from 'react';
import {Panel, ButtonToolbar, Button} from 'react-bootstrap'

export default class TaskNode extends React.Component {
  constructor() {
    super();
    this.closeTask = this.closeTask.bind(this);
  }

  closeTask() {
    var task = this.props.task;
    console.log('closeTask');
    this.props.onClosing(task);
  }

  render() {
    var task = this.props.task;

    return (
      <Panel header={task.Subject} bsStyle="primary">{task.Description}
        <ButtonToolbar>
          {task.Status == "Open" && this.props.showCloseButton == true
            ? <Button bsStyle="success" onClick={this.closeTask}>Close</Button>
            : null}
        </ButtonToolbar>
      </Panel>
    )
  }
}