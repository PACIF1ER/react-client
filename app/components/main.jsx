import React from 'react';
import { Link } from 'react-router';
import { logoutUser } from '../actions/index';
import { connect } from 'react-redux';

function Main({logoutUser, authenticated}) {

  function renderButtons() {
    if (authenticated) {
      return (
        <div>
          <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
          <button className="btn btn-info" onClick={() => logoutUser()}>Logout</button>
        </div>
      )
    }
    return (
      <div>
        <Link to="/register" className="btn btn-primary">Register</Link>
        <Link to="/login" className="btn btn-success">Login</Link>
      </div>
    )
  }

  return (
    <div className="full-page">
      <div className="content text-center">
        <h1> Hipster TODO </h1>
        {renderButtons()}
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
