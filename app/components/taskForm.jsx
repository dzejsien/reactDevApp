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
      validatePristine: true
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.props.handleOpen();
  }

  handleSubmit(model, resetForm) {
    this.props.onSubmit(model);
    resetForm();
    this.handleOpen();
  }

  preaperSelectOptions(array, valueProp, labelProp) {
    var options = array.map(elem => {
        return {
          'value': elem[valueProp],
          'label': elem[labelProp]
        };
    });
    var singleOptions = options.slice(0);
    singleOptions.unshift({value: '', label: 'Please select…'});
    return singleOptions;
  }

  render() {
    var selectOptionsProject = this.preaperSelectOptions(this.props.projects, 'Id', 'Name');
    var selectOptionsUser = this.preaperSelectOptions(this.props.users, 'Id', 'FullName');

    return (
      <div>
        <Button bsClass="btn btn-primary" onClick={this.handleOpen}>
          Create new task
        </Button>
        <Panel collapsible expanded={this.props.open}>
          <MyForm onSubmit={this.handleSubmit}
                layout={this.state.layout}
                validatePristine={this.state.validatePristine}
                ref="taskForm">
                <Input name="id" type="hidden" />
                <Input placeholder="Enter subject" label="Subject" name="subject" validations="maxLength:250" validationError="Max chars is 250" required />
                <Input placeholder="Enter description" label="Description" name="description" validations="maxLength:1250" validationError="Max chars is 1250" required />
                <Select name="projectId" label="Project" options={selectOptionsProject} required />
                <Select name="userId" label="User" options={selectOptionsUser} required />
                <Button type="submit">Submit</Button>
          </MyForm>
        </Panel>
      </div>
    );
  }
}
