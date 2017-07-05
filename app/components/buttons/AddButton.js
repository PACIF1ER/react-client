import React, {Component, PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import Add from 'material-ui/svg-icons/content/add-circle'

const AddButton = props => {
  const iconStyle = Object.assign({color: "#5DB4F2", width: 24, height: 24}, props.iconStyle)

  return (
    <IconButton
      iconStyle={iconStyle}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{padding: 0, width: 48, height: 36}}
      >
      <Add />
    </IconButton>
  )
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  iconStyle: PropTypes.object
}

export default AddButton
