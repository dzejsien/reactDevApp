import React from 'react'
import {Table} from 'react-bootstrap'
import UserNode from './userNode.jsx'
import TableHead from './tableHead.jsx'
import TableRow from './tableRow.jsx'

export default class UserList extends React.Component {
  render() {
    var rows = this.props.users.map((u, i) => <TableRow key={i} data={[u.Id, u.FirstName, u.LastName]} />);

    return (
        <div className="row">
          <div className="col-md-offset-1 col-md-8">
            <div className="bs-component">
              <Table striped bordered condensed hover>
                <TableHead def={['#', 'FirstName', 'LastName']}/>
                <tbody>
                  {rows}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
    )
  }
}
