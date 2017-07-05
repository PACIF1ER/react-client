import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import Formsy from 'formsy-react'

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const underlineFocusStyle = {
  borderColor: '#692d55'
}

let TextInput = React.createClass({
  mixins: [Formsy.Mixin],

  componentDidMount(){
    this.setValue(this.props.value)
  },

  changeValue(e) {
    const value = e.target.value
    this.setValue(value)
    this.props.onChange(value)
  },

  render(){
    return (
      <TextField
        name={this.props.name}
        value={this.props.value}
        onChange={this.changeValue}
        errorText={this.getErrorMessage()}
        underlineFocusStyle={{}}
      />
    )
  }
})

TextInput.propTypes = propTypes
export default TextInput
