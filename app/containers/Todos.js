import React, { Component, PropTypes } from 'react'
import TodoInput from './todos/TodoInput'
import TodoListContainer from './todos/TodoListContainer'

class Todos extends Component {
  render (){
    return (
      <div>
        <TodoInput />
        <TodoListContainer />
      </div>
    )
  }
}

export default Todos
