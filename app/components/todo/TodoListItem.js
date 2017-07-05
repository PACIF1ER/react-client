import React, {Component, PropTypes} from 'react'

import TodoEditPanel from './TodoEditPanel'
import CheckButton from '../buttons/CheckButton'
import DeleteButton from '../buttons/DeleteButton'

const propTypes = {
  todo: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onEditRequest: PropTypes.func,
  onBodyClick: PropTypes.func,
  onAlertSet: PropTypes.func,
  selectingId: PropTypes.number
}

class TodoListItem extends Component {
  _isPanelOpen(){
    return this.props.todo.id === this.props.selectingId
  }

  renderBody(){
    const {todo, onComplete, onBodyClick} = this.props
    const bodyClassName = this._isPanelOpen() ? '' : 'u-ellipsis'
    const clickHandler = (() => {
      if(todo.completed) {
        return () => onComplete(todo)
      } else {
        if(this._isPanelOpen()){
          return () => onBodyClick(-1)
        } else {
          return () => onBodyClick(todo.id)
        }
      }
    })()

    return(
      <div
        className={`c-todos-list-body ${bodyClassName}`}
        onClick={clickHandler}
        >
        {todo.completed ? <strike>{todo.body}</strike> : <span>{todo.body}</span>}
      </div>
    )
  }

  render(){
    const {todo, onComplete, onDelete} = this.props

    return (
      <li>
        <div className='c-todos-list-item'>
          {this.renderBody()}
          {!todo.completed ? <CheckButton onClick={() => onComplete(todo)} />  : null}
          {todo.completed ? <DeleteButton onClick={() => onDelete(todo.id)} /> : null}
        </div>
        <TodoEditPanel
          open={this._isPanelOpen()}
          {...this.props}
        />
      </li>
    )
  }
}

TodoListItem.propTypes = propTypes
export default TodoListItem
