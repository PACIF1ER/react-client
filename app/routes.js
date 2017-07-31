import UIRouterReact from 'ui-router-react';
import Layout from './components/layout.jsx';
import LoginForm from './components/user/login_form.jsx';
import RegisterForm from './components/user/register_form.jsx';
import Dashboard from './components/dashboard.jsx';
import Main from './components/main.jsx';
import requireAuth from './components/hoc/require_auth.jsx';
import requireUnauth from './components/hoc/require_unauth.jsx';
import emailConfirmation from './components/user/email_confirmation';

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

const confirmState = {
  name: 'email_confirm',
  url:  '/email_confirm',
    component: requireAuth(emailConfirmation)
}

const dashboardState = {
  name: 'dashboard',
  url: '/dashboard',
  component: requireAuth(Dashboard)
}

const allStates = [].concat(mainState, registerState, loginState, dashboardState, confirmState);
allStates.map(state => { Router.stateRegistry.register(state)});
Router.html5Mode(true);
Router.start();
