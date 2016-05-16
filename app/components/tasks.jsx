import React from 'react';
import ReactDOM from 'react-dom';

export default class Tasks extends React.Component {
  render() {
    return (<div className="container">
    <div className="page-header">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6">
          <h1>Tasks</h1>
          <p className="lead">Define new or edit existing tasks</p>
        </div>
      </div>
      <div className="row">
        <button id="createTask" className="btn btn-primary" type="button">Create new task</button>

      </div>
      <hr />
      <div className="row">
        <div className="col-md-offset-1 col-md-8">
          <div className="bs-component">
          tasks...
          </div>
        </div>
      </div>
    </div>
  </div>)
  }
}

//ReactDOM.render(<World/>, document.getElementById('world'));
