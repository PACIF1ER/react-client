import React, {Component, PropTypes} from 'react'
import Formsy from 'formsy-react'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }
}

const propTypes = {
  onChange: PropTypes.func.isRequired
}

let FileInput = React.createClass({
  mixins: [Formsy.Mixin],

  changeFile(e) {
    const file = e.target.files[0]
    this.setValue(file)

    if(this.isValidValue(file)){
      this.props.onChange(e)
    }
  },

  render(){
    return (
      <span>
        <FlatButton
          containerElement="label"
          label="Choose File"
          >
          <input
            type="file"
            formNoValidate
            onChange={this.changeFile}
            style={styles.imageInput}
          />
        </FlatButton>
        <label>{this.getErrorMessage()}</label>
      </span>
    )
  }
})

FileInput.propTypes = propTypes
export default FileInput
