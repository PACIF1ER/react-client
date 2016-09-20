import React, { Component, PropTypes } from 'react';
import { emailInput, passwordInput, passwordConfirmationInput, firstNameInput, lastNameInput } from './form_inputs/index.jsx';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import { UISref } from 'ui-router-react';

function RegisterForm({handleSubmit, registerUser}) {
  function onSubmit(props) {
    registerUser(props)
  }

  return (
    <div className="full-page">
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3> Register User </h3>
          <Field name="email" component={emailInput} />
          <Field name="password" component={passwordInput} />
          <Field name="password_confirmation" component={passwordConfirmationInput} />
          <Field name="first_name" component={firstNameInput} />
          <Field name="last_name" component={lastNameInput} />
          <div className="form-group">
            <button type="submit" className="btn btn-primary"> Register </button>
            <UISref to="main"><a className="btn btn-success">Home</a></UISref>
          </div>
        </form>
      </div>
    </div>
  )
}

function validate(values) {
  const errors = {};
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm

  if (!values.email) {
    errors.email = "Add an email"
  }

  if (values.email && !emailRegex.test(values.email)) {
    errors.email = "Email format invalid"
  }

  if (!values.password) {
    errors.password = "Add a password"
  }

  if (values.password && values.password.length < 8) {
    errors.password = "Password needs to be at least 8 characters"
  }

  if (values.password != values.password_confirmation) {
    errors.password_confirmation = "Password confirmation does not match password"
  }

  if (!values.first_name) {
    errors.first_name = "Add a first name"
  }

  if (!values.last_name) {
    errors.last_name = "Add a last name"
  }

  return errors;
}


const RegisterUserReduxForm = reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterForm);

export default connect(null, { registerUser })(RegisterUserReduxForm)
