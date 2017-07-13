import React from 'react';
import { connect } from 'react-redux';
import Todos from '../containers/Todos.js';
import TextField from 'material-ui/TextField';
import { logoutUser } from '../actions/index';
import { UISref } from 'ui-router-react';


function Dashboard({logoutUser, authenticated}) {
	function renderHeader(){
		if (authenticated) {
  return (
  	
  	<div className="menu">
    <div className="container-fluid">
		<div className="navbar-header">
			<UISref to="main"><a>Todo App</a></UISref>
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

  return (
  	<div id='container'>
  		{renderHeader()}
  	<Todos />
  	</div>
  )	
 

}
function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}


export default connect(mapStateToProps, { logoutUser })(Dashboard);