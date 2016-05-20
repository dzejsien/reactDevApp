import React from 'react'
import Reflux from 'reflux'
import {FormGroup, ControlLabel, FormControl, Button, Panel} from 'react-bootstrap'
import Formsy from 'formsy-react'
import OwnInput from './ownInput.jsx'
import MyForm from './myForm.jsx'
import FRC from 'formsy-react-components';
import TaskToEditStore from '../stores/taskToEditStore.js'
import TaskToEditActions from '../actions/taskToEditActions.js'
import Task, {preaperSelectOptions} from '../common.js'

const { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } = FRC;

var TaskForm = module.exports = React.createClass({
  mixins: [Reflux.connect(TaskToEditStore, 'taskToEdit')],

  getInitialState() {
    return ({
        layout: 'vertical',
        validatePristine: true,
        taskToEdit: new Task(),
      })
  },

  handleOpen() {
    this.setState({taskToEdit: new Task()});
    this.props.handleOpen();
  },

  handleSubmit(model, resetForm) {
    this.props.onSubmit(model);
    resetForm();
    this.handleOpen();
  },

  render() {
    var selectOptionsProject = preaperSelectOptions(this.props.projects, 'Id', 'Name');
    var selectOptionsUser = preaperSelectOptions(this.props.users, 'Id', 'FullName');

    return (
      <div>
        <Button bsClass="btn btn-primary" onClick={this.handleOpen}>
          Create new task
        </Button>
        <Panel collapsible expanded={this.props.open}>
          <MyForm onSubmit={this.handleSubmit}
                layout={this.state.layout}
                validatePristine={this.state.validatePristine}>
                <Input value={this.state.taskToEdit.Id} name="id" type="hidden" />
                <Input value={this.state.taskToEdit.Subject} placeholder="Enter subject" label="Subject" name="subject" validations="maxLength:250" validationError="Max chars is 250" required />
                <Input value={this.state.taskToEdit.Description} placeholder="Enter description" label="Description" name="description" validations="maxLength:1250" validationError="Max chars is 1250" required />
                <Select value={this.state.taskToEdit.ProjectId} name="projectId" label="Project" options={selectOptionsProject} required />
                <Select value={this.state.taskToEdit.UserId} name="userId" label="User" options={selectOptionsUser} required />
                <Button type="submit">Submit</Button>
          </MyForm>
        </Panel>
      </div>
    );
  }
});
