import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import styles from './styles/application.styl';
import reducers from './reducers';
import Layout from './components/layout.jsx';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <Layout/>
  </Provider>
  , document.getElementById('app')
)
