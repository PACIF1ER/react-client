const INITIAL_STATE = null;
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGOUT_USER = 'LOGOUT_USER';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case REGISTER_USER:
    return action.payload
  case LOGIN_USER:
    return action.payload
  case LOGOUT_USER:
    return action.payload
  default:
    if (localStorage.auth_token) {
      return true
    }

    return state
  }
}
