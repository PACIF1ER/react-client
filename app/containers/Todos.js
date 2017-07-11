import React, { Component, PropTypes } from 'react'
import TodoInput from './todos/TodoInput'
import TodoListContainer from './todos/TodoListContainer'

class Todos extends Component {
	
  render (){
    return (
      <div className="full-page">
      	<div className="content-lg">
        <TodoInput />
        <TodoListContainer />
      </div>
     </div>
    )
  }
}

export default Todos
