import React from 'react';
import { markComplete, deleteTask } from '../actions/index';
import { connect } from 'react-redux';

function Task({ task, markComplete, deleteTask }) {

  function deleteConfirmation() {
    if (window.confirm("Delete?")) {
      deleteTask(task.id)
    }
  }

  function completeButton() {
    if (task.complete) {
      return <button onClick={() => { markComplete(task.id) }} className="btn btn-info">Completed</button>
    }
    return <button onClick={() => { markComplete(task.id) }} className="btn btn-warning">Incompleted</button>
  }

  return (
    <div className="task">
      <p className="description">{task.description}</p>
      {completeButton()}
      <button onClick={() => { deleteConfirmation() }} className="btn btn-danger delete-btn">X</button>
    </div>
  )
}

export default connect(null, { markComplete, deleteTask })(Task);
