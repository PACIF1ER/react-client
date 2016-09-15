import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createTask } from '../actions/index';

function CreateTaskForm() {
  return (
    <div> This is the create task form </div>
  )
}

function validate(values) {
  const errors = {}

  return errors;
}

const CreateTaskReduxForm = reduxForm({
  form: 'CreateTaskForm',
  validate
})(CreateTaskForm);

export default connect(null, { createTask })(CreateTaskReduxForm)
