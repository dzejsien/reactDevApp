import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Panel} from 'react-bootstrap'
import Formsy from 'formsy-react'
import OwnInput from './ownInput.jsx'

export default class TaskForm extends React.Component {
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
      open: !this.state.open,
      subject: '',
      desc: ''
    });
  }

  handleSubmit(model) {
    //e.preventDefault();
    console.log(model);
    this.props.onTaskSubmit(model);
  }

  render() {
    return (
      <div>
        <Button bsClass="btn btn-primary" onClick={this.handleOpen}>
          Create new task
        </Button>
        <Panel collapsible expanded={this.state.open}>

          <Formsy.Form onValidSubmit={this.handleSubmit}>
            <OwnInput inputId="inputSubject" placeholder="Enter subject" labelName="Subject" name="subject" validations="maxLength:250" validationError="Max chars is 250" required/>
            <OwnInput inputId="inputDesc" placeholder="Enter description" labelName="Description" name="desc" validations="maxLength:1250" validationError="Max chars is 1250" required/>
            <Button type="submit">
                Submit
            </Button>
          </Formsy.Form>
        </Panel>
      </div>
    );
  }
}
// <form onSubmit={this.handleSubmit}>
//   <FormGroup controlId="formControlsSubject">
//     <ControlLabel>Subject</ControlLabel>
//     <FormControl type="text" placeholder="Enter subject" />
//   </FormGroup>
//   <FormGroup controlId="formControlsDescription">
//     <ControlLabel>Description</ControlLabel>
//     <FormControl componentClass="textarea" placeholder="Enter description"/>
//   </FormGroup>
//   <Button type="submit">
//     Submit
//   </Button>
// </form>

// <Formsy.Form onValidSubmit={this.handleSubmit}>
//   <OwnInput name="subject" validations="maxLength:250" validationError="Max chars is 250" required/>
//   <Button type="submit">
//       Submit
//   </Button>
// </Formsy.Form>
