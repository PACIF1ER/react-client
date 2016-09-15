import React from 'react';
import { Link } from 'react-router';
import { logoutUser } from '../actions/index';
import { connect } from 'react-redux';

function Main({logoutUser, authenticated}) {
  function loginButton() {
    if (authenticated) {
      return (
        <button className="btn btn-info" onClick={() => logoutUser()}>Logout</button>
      )
    }

    return (
      <Link to="/login" className="btn btn-success"> Login </Link>
    )
  }

  function registerButton() {
    if (authenticated) {
      return null
    }

    return (
      <Link to="/register" className="btn btn-primary">Register </Link>
    )
  }

  return (
    <div className="full-page">
      <div className="content text-center">
        <h1> Hipster TODO </h1>
        {registerButton()}
        {loginButton()}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, { logoutUser })(Main)
