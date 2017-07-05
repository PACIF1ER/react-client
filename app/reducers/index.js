import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth_reducer';
import FlashMessage from './flash_message_reducer';
import todos from './todo';

const rootReducer = combineReducers({
  form: formReducer,
  authenticated: AuthReducer,
  flashMessage: FlashMessage,
  todos
})

export default rootReducer
