import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from '../../actions/todoActions'
import * as notificationActions from '../../actions/notificationActions'
import { getActiveTodos, getCompletedTodos } from '../../selectors'

import Progress from '../../components/Progress'
import List from '../../components/todo/TodoList'
import Divider from 'material-ui/Divider'
import TodoEditForm from './TodoEditForm'

const propTypes = {
  completedTodos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  requestNotificationPermission: PropTypes.func.isRequired,
  selectingId: PropTypes.number,
  notify: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired
}

let timeoutId = -1

class TodoListContainer extends Component {
  constructor(props){
    super(props)

    this.handleComplete = this.handleComplete.bind(this)
    this.handleAlertSet = this.handleAlertSet.bind(this)
  }

  componentDidMount(){
    const {authenticated, fetchTodos, requestNotificationPermission, notify, todos} = this.props
    
      fetchTodos()
    
    requestNotificationPermission().then(() => {
      const checkNotice = () => {
        notify(todos)
        timeoutId = setTimeout(() => {
          checkNotice()
        }, 60000)
      }
      checkNotice()
    })
  }

  componentWillUnmount(){
    if(timeoutId < 0){
      clearTimeout(timeoutId)
    }
  }

  handleComplete(todo){
    this.props.updateTodo(todo.id, {completed: !todo.completed})
  }

  handleAlertSet(todoId, alertAt){
    this.props.updateTodo(todoId, {alert_at: alertAt})
  }

  render(){
    const {isFetching, todos, completedTodos} = this.props

    if(isFetching){
      return <Progress />
    }

    return (
      <div className='row'>
        <div className='small-12 medium-6 columns'>
          <List
            todos={todos}
            onComplete={this.handleComplete}
            onEditRequest={this.props.editTodo}
            onBodyClick={this.props.selectTodo}
            selectingId={this.props.selectingId}
            onAlertSet={this.handleAlertSet}
            onDelete={this.props.deleteTodo}

          />
        </div>

        <div className='small-12 medium-6 columns'>
          <List
            todos={completedTodos}
            onComplete={this.handleComplete}
            onDelete={this.props.deleteTodo}
          />
        </div>

        <TodoEditForm />
      </div>
    )
  }
}
TodoListContainer.propTypes = propTypes

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  isFetching: state.todos.isFetching,
  selectingId: state.todos.selectingId,
  todos: getActiveTodos(state),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({...todoActions, ...notificationActions}, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer)
