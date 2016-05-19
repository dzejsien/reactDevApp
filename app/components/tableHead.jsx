import React from 'react'
export default class TableHead extends React.Component {

  render() {
    var head = this.props.def.map((x, i) => <th key={i}>{x}</th>);
    return (
      <thead>
        <tr>
          {head}
        </tr>
      </thead>
    );
  }
}
