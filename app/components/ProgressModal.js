import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog'
import CircularProgress from 'material-ui/CircularProgress'

const propTypes = {
  open: PropTypes.bool.isRequired
}

class ProgressModal extends Component{
  render(){
    return(
      <Dialog
        open={this.props.open}
        modal={true}
        >
        <div
          style={{width: '100%', textAlign: 'center'}}
          >
          <CircularProgress
            size={80}
            thickness={5}
          />
        </div>
      </Dialog>
    )
  }
}

ProgressModal.propTypes = propTypes
export default ProgressModal
