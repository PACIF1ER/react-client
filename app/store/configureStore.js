import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const composeEnhancers =
  process.env.NODE_ENV === 'development' ?
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
    compose

const configureStore = () => {
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  )
}

export default configureStore
