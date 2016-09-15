import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFlashMessage } from '../../actions/index';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        setFlashMessage("Please login first", "primary")
        this.context.router.push("/")
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.content.router.push("/")
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

  return connect(mapStateToProps)(Authentication);
}
