import UIRouterReact from 'ui-router-react';
import Layout from './components/layout.jsx';
import LoginForm from './components/login_form.jsx';
import RegisterForm from './components/register_form.jsx';
import Dashboard from './components/dashboard.jsx';
import Main from './components/main.jsx';
import requireAuth from './components/hoc/require_auth.jsx';
import requireUnauth from './components/hoc/require_unauth.jsx';

export const Router = new UIRouterReact();

const mainState = {
  name: 'main',
  url: '/',
  component: Main
}

const registerState = {
  name: 'register',
  url: '/register',
  component: requireUnauth(RegisterForm)
}

const loginState = {
  name: 'login',
  url: '/login',
  component: requireUnauth(LoginForm)
}

const dashboardState = {
  name: 'dashboard',
  url: '/dashboard',
  component: requireAuth(Dashboard)
}

const allStates = [].concat(mainState, registerState, loginState, dashboardState);
allStates.map(state => { Router.stateRegistry.register(state)});
Router.html5Mode(true);
Router.start();
