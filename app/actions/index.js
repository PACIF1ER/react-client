import axios from 'axios';
import { Router } from '../routes';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGOUT_USER = 'LOGOUT_USER';
const FETCH_TASKS = 'FETCH_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const MARK_TASK = 'MARK_TASK';
const CREATE_TASK = 'CREATE_TASK';

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
      dispatch({ type: FETCH_TASKS, payload: response })
    })
    .catch(error => {
      dispatch(setFlashMessage("Error retrieving tasks", "danger"))
    })
  }
}

export function markComplete(taskId) {
  return function(dispatch) {
    const URL = `${ROOT_URL}/tasks/${taskId}/complete`
    const params = {
      method: 'POST',
      url: URL,
      headers: {
        Authorization: localStorage.auth_token
      }
    }
    axios(params)
    .then(response => {
      const status = response.data.complete ? "complete" : "incomplete"
      dispatch(setFlashMessage(`Task marked as ${status}`, "success"))
      dispatch({ type: MARK_TASK, payload: response.data })
    })
    .catch(error => {
      dispatch(setFlashMessage("Error marking task", "danger"))
    })
  }
}

export function deleteTask(taskId) {
  return function(dispatch) {
    const URL = `${ROOT_URL}/tasks/${taskId}`
    const params = {
      method: 'DELETE',
      url: URL,
      headers: {
        Authorization: localStorage.auth_token
      }
    }
    axios(params)
    .then(response => {
      dispatch(setFlashMessage("Task deleted", "success"))
      dispatch({ type: DELETE_TASK, payload: response.data })
    })
    .catch(error => {
      dispatch(setFlashMessage("Error deleting task", "danger"))
    })
  }
}

export function createTask(task) {
  return function(dispatch) {
    const URL = `${ROOT_URL}/tasks`
    const params = {
      method: 'POST',
      url: URL,
      headers: {
        Authorization: localStorage.auth_token
      },
      data: {
        task,
        format: 'json'
      }
    }

    axios(params)
    .then(response => {
      dispatch(setFlashMessage("Task created", "success"))
      dispatch({ type: CREATE_TASK, payload: response.data})
    })
    .catch(error => {
      dispatch(setFlashMessage(error.response.data.message, "danger"))
    })
  }
}
