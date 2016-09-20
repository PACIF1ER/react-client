import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createTask } from '../actions/index';
import { descriptionInput } from './form_inputs/index.jsx';
import { UISref } from 'ui-router-react';

function CreateTaskForm({handleSubmit, createTask}) {

  function onSubmit(props) {
    createTask(props)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="margined text-center"> Create Task </h3>
      <Field name="description" component={descriptionInput} />
      <div className="form-group text-center">
        <button type="submit" className="btn btn-primary"> Create Task </button>
        <UISref to="main"><a className="btn btn-success">Home</a></UISref>
      </div>
    </form>
  )
}

function validate(values) {
  const errors = {}

  if (!values.description) {
    errors.description = "Add a task description"
  }

  return errors;
}

const CreateTaskReduxForm = reduxForm({
  form: 'CreateTaskForm',
  validate
})(CreateTaskForm);

export default connect(null, { createTask })(CreateTaskReduxForm)
