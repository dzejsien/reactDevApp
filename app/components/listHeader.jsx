import React from 'react';

export default class ListHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-6">
          <h1>{this.props.title}</h1>
          <p className="lead">{this.props.desc}</p>
        </div>
      </div>
    )
  }
}
