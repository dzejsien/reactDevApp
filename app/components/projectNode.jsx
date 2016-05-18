import React from 'react';
import {Panel} from 'react-bootstrap'

export default class ProjectNode extends React.Component {
  render() {
    var project = this.props.project;

    return (
      <Panel header={project.Name} bsStyle="primary">{project.Description}
      </Panel>
    )
  }
}
