import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideFlashMessage } from '../actions/index';

function FlashMessage({ flashMessage, flashKey, flashVisible, hideFlashMessage }) {

  function setMessage(message) {
    if (Array.isArray(message)) {
      return (
        <ul>
          {
            message.map((m,i) => {
              return (
                <li key={i}>{m}</li>
              )
            })
          }
        </ul>
      )
    } else {
      return <strong>{message}</strong>
    }
  }

  if (flashMessage && flashVisible) {
    return (
      <div className={`alert alert-${flashKey}`}>
        <a href="#" className="close" onClick={hideFlashMessage} aria-label="close">&times;</a>
        {setMessage(flashMessage)}
      </div>
    )
  }

  return <div></div>
}

function mapStateToProps(state) {
  return {
    flashKey: state.flashMessage.key,
    flashMessage: state.flashMessage.message,
    flashVisible: state.flashMessage.visible
  }
}

export default connect(mapStateToProps, { hideFlashMessage })(FlashMessage)
