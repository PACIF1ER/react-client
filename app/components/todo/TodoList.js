import React, {Component, PropTypes} from 'react'
import TodoListItem from './TodoListItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const TodoList = props => (
  <ul className='no-bullet'>
    <ReactCSSTransitionGroup
      transitionName='fade'
      transitionAppear={true}
      transitionAppearTimeout={200}
      transitionEnter={false}
      transitionLeave={false}
      >
      {props.todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          {...props}
        />
      ))}
    </ReactCSSTransitionGroup>
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onEditRequest: PropTypes.func,
  onDelete: PropTypes.func,
  onBodyClick: PropTypes.func,
  onAlertSet: PropTypes.func,
  selectingId: PropTypes.number
}

export default TodoList
