import React from 'react'
import UserNode from './userNode.jsx'


export default class UserList extends React.Component {
  render() {
    var users = this.props.users.map(u => <UserNode key={u.Id} user={u} />);

    return (
        <div className="row">
          <div className="col-md-offset-1 col-md-8">
            <div className="bs-component">
              {users}
            </div>
          </div>
        </div>
    )
  }
}
