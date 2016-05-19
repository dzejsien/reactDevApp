import React from 'react'
import TaskNode from './taskNode.jsx'

export default class TaskList extends React.Component {
  render() {
    var tasks = this.props.tasks.map(t => <TaskNode key={t.Id} task={t} onClosing={this.props.onClosing} beginEdition={this.props.beginEdition} showCloseButton={this.props.showCloseButton} showEditButton={this.props.showEditButton}/>);

    return (
      <div className="row">
        <div className="col-md-offset-1 col-md-8">
          <div className="bs-component">
            {tasks}
          </div>
        </div>
      </div>
    )
  }
}
