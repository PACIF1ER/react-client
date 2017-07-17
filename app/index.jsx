import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import styles from './styles/application.css.scss';
import reducers from './reducers';
import Layout from './components/layout.jsx';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#5DB4F2",
    primary2Color: "#028DF0",
    pickerHeaderColor: "#5DB4F2"
  },
  datePicker:{
    selectColor: "#5DB4F2"
  }
})
injectTapEventPlugin()




const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout/>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app')
)
