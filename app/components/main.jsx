import React from 'react';
import { logoutUser } from '../actions/index';
import { connect } from 'react-redux';
import { UISref } from 'ui-router-react';
function Main({logoutUser, authenticated}) {

  function renderButtons() {
    if (authenticated) {
      return (
        <div>
          <UISref to="dashboard"><a className="btn btn-primary">Dashboard</a></UISref>
          <button className="btn btn-info" onClick={() => logoutUser()}>Logout</button>
        </div>
      )
    }
    return (
      <div>
        <UISref to="register"><a className="btn btn-primary">Register</a></UISref>
        <UISref to="login"><a className="btn btn-success">Login</a></UISref>
      </div>
    )
  }

  return (
    <div className="full-page">
      <div className="content text-center">
        <h1> Todo app </h1>
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
