import React from 'react'
import ProjectNode from './projectNode.jsx'


export default class ProjectList extends React.Component {
  render() {
    var projects = this.props.projects.map(p => <ProjectNode key={p.Id} project={p} />);

    return (
        <div className="row">
          <div className="col-md-offset-1 col-md-8">
            <div className="bs-component">
              {projects}
            </div>
          </div>
        </div>
    )
  }
}
