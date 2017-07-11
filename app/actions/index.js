import axios from 'axios';
import { Router } from '../routes';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE';
const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGOUT_USER = 'LOGOUT_USER';


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

