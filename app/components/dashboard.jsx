import React from 'react';
import { connect } from 'react-redux';
import Todos from '../containers/Todos.js';
import TextField from 'material-ui/TextField';
function Dashboard() {
  return (
    <div className="full-page">
      <div className="content-lg">
        <Todos />
      </div>
    </div>
  )
}

export default Dashboard;
