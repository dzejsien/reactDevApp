import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Panel} from 'react-bootstrap'
import Formsy from 'formsy-react'
import OwnInput from './ownInput.jsx'
import MyForm from './myForm.jsx'
import FRC from 'formsy-react-components';

const { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } = FRC;

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'vertical',
      validatePristine: true,
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

    var selectOptions = [
        {value: '1', label: 'Option A'},
        {value: '2', label: 'Option A (again)'},
        {value: '3', label: 'Option B'},
        {value: '4', label: 'Option C'},
    ];

    var singleSelectOptions = selectOptions.slice(0);
    singleSelectOptions.unshift({value: '', label: 'Please select…'});

    return (
      <div>
        <Button bsClass="btn btn-primary" onClick={this.handleOpen}>
          Create new task
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <MyForm onSubmit={this.handleSubmit}
                layout={this.state.layout}
                validatePristine={this.state.validatePristine}
                ref="taskForm">
                <Input placeholder="Enter subject" label="Subject" name="subject" validations="maxLength:250" validationError="Max chars is 250" required />
                <Input placeholder="Enter description" label="Description" name="description" validations="maxLength:1250" validationError="Max chars is 1250" required />
                <Select name="projectId" label="Project" options={singleSelectOptions} required />
                <Select name="userId" label="User" options={singleSelectOptions} required />
                <Button type="submit">Submit</Button>
          </MyForm>
        </Panel>
      </div>
    );
  }
}
// <Formsy.Form onValidSubmit={this.handleSubmit}>
//   <OwnInput inputId="inputSubject" placeholder="Enter subject" labelName="Subject" name="subject" validations="maxLength:250" validationError="Max chars is 250" required/>
//   <OwnInput inputId="inputDesc" placeholder="Enter description" labelName="Description" name="description" validations="maxLength:1250" validationError="Max chars is 1250" required/>
//   <Button type="submit">
//       Submit
//   </Button>
// </Formsy.Form>
