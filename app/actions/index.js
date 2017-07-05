import axios from 'axios';
import { Router } from '../routes';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGOUT_USER = 'LOGOUT_USER';
const FETCH_TODOS = 'FETCH_TODOS';
const RECEIVE_TODOS = 'RECEIVE_TODOS';
const ADD_TODO = 'ADD_TODO';
const ADD_TODO_COMPLETE = 'ADD_TODO_COMPLETE';
const EDIT_TODO = 'EDIT_TODO';
const UPDATE_TODO= 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECT_TODO = 'SELECT_TODO';
const SET_ALERT = 'SET_ALERT';
const CANCEL_EDIT_TODO = 'CANCEL_EDIT_TODO';

const ROOT_URL = "http://localhost:3000/api/v1";

export function hideFlashMessage() {
  return {
    type: HIDE_FLASH_MESSAGE,
    payload: { visible: false }
  }
}

export function setFlashMessage(message, key) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: { message, key, visible: true }
  }
}

export function registerUser(user) {
  return function(dispatch) {
    const URL = `${ROOT_URL}/users`
    const params = {
      format: 'json',
      user
    }
    axios.post(URL, params)
    .then(response => {
      localStorage.setItem('auth_token', response.data.auth_token);
      Router.stateService.go('main')
      dispatch({ type: REGISTER_USER, payload: true })
      dispatch(setFlashMessage(response.data.message, "success"))
    })
    .catch(error => {
      let errorMessage = error.response.data.message
      if (errorMessage[0] === "[") {
        errorMessage = eval(errorMessage)
      }
      dispatch(setFlashMessage(errorMessage, "danger"))
    })
  }
}

export function loginUser(user) {
  return function(dispatch) {
    const URL = `${ROOT_URL}/sessions`
    const params = {
      format: 'json',
      user
    }
    axios.post(URL, params)
    .then(response => {
      localStorage.setItem('auth_token', response.data.auth_token);
      Router.stateService.go('main')
      dispatch({ type: LOGIN_USER, payload: true });
      dispatch(setFlashMessage("Login successful", "success"))
    })
    .catch(error => {
      dispatch(setFlashMessage(error.response.data.message, "danger"))
    })
  }
}

export function logoutUser() {
  return function(dispatch) {
    localStorage.removeItem('auth_token');
    dispatch({ type: LOGOUT_USER, payload: false });
    dispatch(setFlashMessage("Logged out", "success"))
  }
}
export function fetchTasks() {
  return function(dispatch) {
    const URL = `${ROOT_URL}/tasks`
    const headers = {
      Authorization: localStorage.auth_token
    }
    axios.get(URL, { headers: headers })
    .then(response => {
      dispatch({ type: FETCH_TODOS, payload: response })
    })
    .catch(error => {
      dispatch(setFlashMessage("Error retrieving tasks", "danger"))
    })
  }
}

export const selectTodo = (todoId) => ({
  type: SELECT_TODO,
  todoId
})

export const addTodo = (body) => {
  return (dispatch) => {
             const headers = {
      Authorization: localStorage.auth_token
}
    dispatch({type: ADD_TODO})
    axios.post('http://localhost:3000/api/v1/tasks', { headers}, {todo: {body}})
    .then(res => {
      dispatch({
        type: ADD_TODO_COMPLETE,
        todo: res.data
      })
    })
  }
}

//TODO api揃える！！
export const editTodo = (todo) => ({
  type: EDIT_TODO,
  todo
})

export const updateTodo = (todoId, params) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.patch(`http://localhost:3000/api/v1/tasks/${taskId}`, {todo: params})
      .then(res => {
        dispatch({
          type: UPDATE_TODO,
          todo: res.data
        })
        resolve('Your Todo is updated.')
      })
    })
  }
}

export const deleteTodo = (todoId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/api/v1/tasks/${taskId}`)
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        todoId
      })
    })
  }
}

export const cancelEdit = () => ({
  type: CANCEL_EDIT_TODO
})
