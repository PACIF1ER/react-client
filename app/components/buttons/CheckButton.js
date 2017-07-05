import React, {Component, PropTypes} from "react"
import IconButton from "material-ui/IconButton"
import CheckCircle from "material-ui/svg-icons/action/check-circle"
import Done from "material-ui/svg-icons/action/done"

const CheckButton = props => {
  return (
    <IconButton
      iconStyle={{}}
      onClick={props.onClick}
      >
      <Done />
    </IconButton>
  )
}

CheckButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CheckButton
