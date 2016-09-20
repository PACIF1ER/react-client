import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Router } from '../../routes';

export default function(ComposedComponent) {
  class Unauthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        Router.stateService.go('main')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    }
  }

  return connect(mapStateToProps)(Unauthentication);
}
