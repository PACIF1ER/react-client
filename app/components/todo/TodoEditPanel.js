import React, {Component, PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Alarm from 'material-ui/svg-icons/action/alarm'
import moment from 'moment'
import DeleteButton from '../buttons/DeleteButton'
import TimeSelector from '../TimeSelector'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const panelStyle = {
  overflow: 'hidden'
}
const iconStyle = {
}

const propTypes = {
  todo: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onEditRequest: PropTypes.func,
  onAlertSet: PropTypes.func
}

class TodoEditPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      isTimeSelecting: false
    }
  }

  render(){
    const {open, todo, onEditRequest, onAlertSet} = this.props

    return (
      <ReactCSSTransitionGroup
        transitionName='from-top'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
        {open &&
          <div style={panelStyle} className="u-flex-container u-flex-center">
            <IconButton
              iconStyle={iconStyle}
              onClick={() => onEditRequest(todo)}
              >
              <ModeEdit />
            </IconButton>

            <IconButton
              iconStyle={iconStyle}
              onClick={() => this.setState({isTimeSelecting: !this.state.isTimeSelecting})}
              >
              <Alarm />
            </IconButton>

            {todo.alert_at &&
              <div className="u-flex-container u-flex-center">
                <span>{moment(todo.alert_at).format('HH:mm')}</span>
                <DeleteButton
                  onClick={() => onAlertSet(todo.id, '')}
                />
              </div>
            }

            <TimeSelector
              open={this.state.isTimeSelecting}
              onSubmit={time => {
                this.setState({isTimeSelecting: false})
                onAlertSet(todo.id, time)}
              }
              onRequestClose={() => this.setState({isTimeSelecting: false})}
              defaultDateTime={todo.alert_at}
            />
          </div>
        }
      </ReactCSSTransitionGroup>
    )
  }
}

TodoEditPanel.propTypes = propTypes
export default TodoEditPanel
