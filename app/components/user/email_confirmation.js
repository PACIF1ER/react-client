import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './../main.jsx';
import { emailConfirmation } from '../../actions/index';

class EmailConfirmation extends Component {

  componentDidMount() {  
    var email_token = window.location.search.replace( '?', '').split('=')[1]; 
    this.props.onEmailConfirmation(email_token);
  }

  render() {
    return(
      <div>
        <Menu /> 
      </div>
    );
  }
}

export default connect(
  ownProps => ({
    ownProps
  }),
  dispatch => ({
    onEmailConfirmation: (email_token) => {
      dispatch(emailConfirmation(email_token));
    }
  })
)(EmailConfirmation);