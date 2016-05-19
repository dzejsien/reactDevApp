import React from 'react'
export default class TableRow extends React.Component {

  render() {
    var row = this.props.data.map(x => <td key={x}>{x}</td>);
    return (
      <tr>
        {row}
      </tr>
    );
  }
}
