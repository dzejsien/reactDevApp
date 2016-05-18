import React from 'react'
import Reflux from 'reflux'
import ProjectStore from '../stores/projectStore.js'
import ProjectActions from '../actions/projectActions.js'
import ProjectNode from './projectNode.jsx'
import ProjectList from './projectList.jsx'
import ListHeader from './ListHeader.jsx'
import ProjectForm from './projectForm.jsx'

var Projects = module.exports = React.createClass({
  mixins: [Reflux.connect(ProjectStore, 'projects')],
  handleProjectSubmit(project) {
      ProjectActions.add(project);
  },

  getInitialState() {
    return {projects: []};
  },

  componentWillMount() {
    ProjectActions.fetchList();
  },

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <ListHeader title="projects" desc="Define new or edit existing projects"/>
          <ProjectForm onSubmit={this.handleProjectSubmit}/>
          <hr/>
          <ProjectList projects={this.state.projects} />
        </div>
      </div>
    )
  }
});
