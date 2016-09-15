import React, { Component } from 'react';
import { Link } from 'react-router';
import { loginUser } from '../actions/index';
import { emailInput, passwordInput } from './form_inputs/index.jsx';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

class LoginForm extends Component {

  onSubmit(props) {
    this.props.loginUser(props)
  }

  render() {
    return (
      <div className="full-page">
        <div className="content">
          <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
            <h3>Login User</h3>
            <Field name="email" component={emailInput} />
            <Field name="password" component={passwordInput} />
            <div className="form-group">
              <button type="submit" className="btn btn-primary"> Login </button>
              <Link to="/" className="btn btn-success">Home</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm

  if (!values.email) {
    errors.email = "Key in your email"
  }

  if (values.email && !emailRegex.test(values.email)) {
    errors.email = "Email format invalid"
  }

  if (!values.password) {
    errors.password = "Key in your password"
  }

  return errors;
}


const LoginUserReduxForm = reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);

export default connect(null, { loginUser })(LoginUserReduxForm)
