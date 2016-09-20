import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFlashMessage } from '../../actions/index';
import { Router } from '../../routes';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.setFlashMessage("Please login first", "warning")
        Router.stateService.go('main')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
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

  return connect(mapStateToProps, { setFlashMessage })(Authentication);
}
