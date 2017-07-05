import React, {Component, PropTypes} from "react"
import IconButton from "material-ui/IconButton"
import Cancel from "material-ui/svg-icons/navigation/cancel"

const iconStyle = {
  color: "#f53c3c"
}

const DeleteButton = props => {
  return(
    <IconButton
      iconStyle={iconStyle}
      onClick={props.onClick}
      >
      <Cancel />
    </IconButton>
  )
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default DeleteButton
