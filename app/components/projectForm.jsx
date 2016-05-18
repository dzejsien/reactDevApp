import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Panel} from 'react-bootstrap'
import Formsy from 'formsy-react'
import OwnInput from './ownInput.jsx'

export default class ProjectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  handleSubmit(model, resetForm) {
    this.props.onSubmit(model);
    resetForm();
    this.handleOpen();
  }

  render() {
    return (
      <div>
        <Button bsClass="btn btn-primary" onClick={this.handleOpen}>
          Create new project
        </Button>
        <Panel collapsible expanded={this.state.open}>

          <Formsy.Form onValidSubmit={this.handleSubmit}>
            <OwnInput inputId="inputName" placeholder="Enter name" labelName="Subject" name="name" validations="maxLength:250" validationError="Max chars is 250" required/>
            <OwnInput inputId="inputDesc" placeholder="Enter description" labelName="Description" name="description" validations="maxLength:1250" validationError="Max chars is 1250" required/>
            <Button type="submit">
                Submit
            </Button>
          </Formsy.Form>
        </Panel>
      </div>
    );
  }
}
