import React from 'react'
import Formsy from 'formsy-react';


var OwnInput = module.exports = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const className = this.showRequired() || this.showError() ? 'has-error' : null;
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label className="control-label" for={this.props.inputId}>{this.props.labelName} {this.isRequired() ? '*' : null}</label>
        <div>
          <input id={this.props.inputId} type="text" className='form-control' placeholder={this.props.placeholder} onChange={this.changeValue} value={this.getValue()}/>
          <span>{errorMessage}</span>
        </div>
      </div>
    );
  }
});
