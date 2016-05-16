import React from 'react';
import ReactDOM from 'react-dom';

export default class Projects extends React.Component {
  render() {
    return (<div className="container">
    <div className="page-header" id="banner">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6">
          <h1>Projects</h1>
          <p className="lead">Define new or edit existing projects</p>
        </div>
      </div>
      <div className="row">
        <button id="createProject" className="btn btn-primary" type="button">Create new project</button>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-offset-1 col-md-8">
          <div className="bs-component">
            projects
          </div>
        </div>
      </div>
    </div>
  </div>);
  }
}

//ReactDOM.render(<Hello/>, document.getElementById('hello'));
