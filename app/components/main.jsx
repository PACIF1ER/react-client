import React from 'react';
import { logoutUser } from '../actions/index';
import { connect } from 'react-redux';
import { UISref } from 'ui-router-react';
function Main({logoutUser, authenticated}) {
  function renderHeader(){
    if (authenticated) {
  return (
    
      <div className="menu">
        <div className="container-fluid">
        <div className="navbar-header">
      <a href="#">Todo App</a>
    </div>
    <div>
      <ul className="nav navbar-nav navbar-right">
        <li><a onClick={() => logoutUser()}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
    </div>
  </div>
</div>

  )
 }
}
  function renderButtons() {
    if (authenticated) {
      return (
      <div className="full-page">
        <div className="content text-center">
          <UISref to="dashboard"><a className="btn btn-primary">Todos</a></UISref>
          </div>
        </div>
      )
    }
    return (
       <div className="menu">
        <div className="container-fluid">
        <div className="navbar-header">
      <a href="#">Todo App</a>
    </div>
    <div>
      <ul className="nav navbar-nav navbar-right">
        <li> <UISref to="login"><a ><span className="glyphicon glyphicon-log-in"></span> Login</a></UISref></li>
        <li> <UISref to="register"><a ><span className="glyphicon glyphicon-user"></span> Register</a></UISref></li>

      </ul>
    </div>
  </div>
</div>
    )
  }

  return (
    <div id='container'> 
          {renderHeader()}

        {renderButtons()}
        <div className="text-todo">
            <p> Simple todo app </p>
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
