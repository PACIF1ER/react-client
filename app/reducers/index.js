import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth_reducer';
import FlashMessage from './flash_message_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  authenticated: AuthReducer,
  flashMessage: FlashMessage
})

export default rootReducer
