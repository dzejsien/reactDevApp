import React from 'react';
import {Panel} from 'react-bootstrap'

export default class UserNode extends React.Component {
  render() {
    var user = this.props.user;

    return (
      <Panel header={user.FirstName} bsStyle="primary">{user.LastName}
      </Panel>
    )
  }
}
