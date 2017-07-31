import React from 'react';
import FlashMessage from '../containers/flash_message.jsx';
import UIRouterReact, { UIView } from 'ui-router-react';
import '../routes';

function Layout() {
  return (
    <div>
      <FlashMessage />
      <UIView/>
    </div>
  )
}

export default Layout;
