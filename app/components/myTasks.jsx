import React from 'react';
import ReactDOM from 'react-dom';

export default class Tasks extends React.Component {
  render() {
    return (<div className="container">
    <div className="page-header" id="banner">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6">
          <h1>My Tasks</h1>
          <p className="lead">This is my list of tasks</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-offset-1 col-md-8">
          <div className="bs-component">
            my tasks ...
          </div>
        </div>
      </div>
    </div>
  </div>)
  }
}

//ReactDOM.render(<World/>, document.getElementById('world'));
