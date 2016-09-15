import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout.jsx';
import Main from './components/main.jsx';
import LoginForm from './components/login_form.jsx';
import RegisterForm from './components/register_form.jsx';
import Dashboard from './components/dashboard.jsx';
import requireAuth from './components/hoc/require_auth.jsx';
import requireUnauth from './components/hoc/require_unauth.jsx';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Main} />
    <Route path="register" component={requireUnauth(RegisterForm)} />
    <Route path="login" component={requireUnauth(LoginForm)} />
    <Route path="dashboard" component={requireAuth(Dashboard)} />
  </Route>
)
