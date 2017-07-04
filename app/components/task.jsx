import React from 'react';
import { updateTask, markComplete, deleteTask } from '../actions/index';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { descriptionInput } from './form_inputs/index.jsx';
import { UISref } from 'ui-router-react';
import InlineEdit from 'react-edit-inline';






function Task({ updateTask, task, markComplete, deleteTask }) {


 function onSubmit() {
      updateTask(task.id)
    }

  function deleteConfirmation() {
      deleteTask(task.id)
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

export default connect(null, { updateTask, markComplete, deleteTask })(Task);
