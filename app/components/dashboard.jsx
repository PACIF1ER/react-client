import React from 'react';
import { connect } from 'react-redux';
import Todos from '../containers/Todos.js';
import TextField from 'material-ui/TextField';
import { logoutUser } from '../actions/index';

function Dashboard() {
	
  return (
  	<div className="menu">
    <div className="container-fluid">
		<div className="navbar-header">
			<a href="#">Bootsnipp</a>
		</div>
		<div>
			<ul className="nav navbar-nav navbar-right">
				<li><a href="#" ><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
				<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
			</ul>
		</div>
	</div>
</div>

)
 

}
function Todosren(){
 	return(
<div>
<Todos />
</div>
 		)
 }


export default Dashboard; Todosren;