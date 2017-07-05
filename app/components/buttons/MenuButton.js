import React, {Component, PropTypes} from "react"
import IconButton from "material-ui/IconButton"
import Menu from "material-ui/svg-icons/navigation/menu"

const MenuButton = props => {
  return (
    <IconButton
      onClick={props.onClick}
      iconStyle={{color:"#F3FAFE"}}
      >
      <Menu />
    </IconButton>
  )
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default MenuButton
