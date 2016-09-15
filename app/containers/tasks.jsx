import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import Task from '../components/task.jsx';

class Tasks extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchTasks();
    }
  }

  renderTasks() {
    const { tasks } = this.props

    if (tasks.length < 1) {
      return <div></div>
    }

    return tasks.map((task, index) => {
      return <Task task={task} key={task.id} />
    })
  }

  render() {

    return (
      <div>
        <h1 className="text-center"> Tasks </h1>
        <div className="tasks">
          { this.renderTasks() }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
    tasks: state.tasks.all
  }
}

export default connect(mapStateToProps, { fetchTasks })(Tasks)
