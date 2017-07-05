import React, {Component, PropTypes} from "react"
import Dialog from 'material-ui/Dialog'
import moment from 'moment'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'
import IconButton from "material-ui/IconButton"
import AccessTime from "material-ui/svg-icons/device/access-time"
import DateRange from "material-ui/svg-icons/action/date-range"
import FlatButton from 'material-ui/FlatButton'

const propTypes = {
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultDateTime: PropTypes.string
}

class TimeSelector extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.getDateString = this.getDateString.bind(this)
    this.getTimeString = this.getTimeString.bind(this)
    this.state = {
      date: moment(),
      time: moment()
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.open && !prevProps.open){
      if(this.props.defaultDateTime){
        this.setState({
          date: moment(this.props.defaultDateTime),
          time: moment(this.props.defaultDateTime)
        })
      }
    }
  }

  handleDateChange(e, data){
    this.setState({
      date: moment(data)
    })
  }

  handleTimeChange(e, data){
    this.setState({
      time: moment(data)
    })
  }

  handleSubmit(){
    this.props.onSubmit(moment(this.state.date.format("YYYY-MM-DD") + " " + this.getTimeString()))
  }

  getDateString(format="YYYY/MM/DD"){
    if(moment(new Date()).isSame(this.state.date, 'day')){
      return "Today"
    }
    return this.state.date.format(format)
  }

  getTimeString(){
    return this.state.time.format("HH:mm")
  }

  render(){
    const {open, onRequestClose} = this.props
    return (
      <Dialog
        open={open}
        onRequestClose={onRequestClose}
        >

        <div className="row collapse">
          <div className="columns small-12 medium-6 text-center">
            <span className="stat">
              {this.getDateString()}
            </span>

            <IconButton
              onClick={() => this.refs.datePicker.openDialog()}
              >
              <DateRange />
            </IconButton>
          </div>

          <div className="columns small-12 medium-6 text-center">
            <span className="stat">
              {this.getTimeString()}
            </span>

            <IconButton
              onClick={() => this.refs.timePicker.openDialog()}
              >
              <AccessTime />
            </IconButton>
          </div>
        </div>


        <div className="text-center">
          <FlatButton onClick={this.handleSubmit}>
            ok
          </FlatButton>
          <FlatButton onClick={() => onRequestClose()}>
            cancel
          </FlatButton>
        </div>


        <DatePicker
          id="datePicker"
          value={this.state.date.toDate()}
          onChange={this.handleDateChange.bind(this)}
          textFieldStyle={{display: 'none'}}
          ref='datePicker'
          style={{
            containerStyle:{
              background: "#000"
            }
          }}
        />

        <TimePicker
          id="timePicker"
          value={this.state.time.toDate()}
          onChange={this.handleTimeChange.bind(this)}
          textFieldStyle={{display: 'none'}}
          ref='timePicker'
        />
      </Dialog>
    )
  }
}

TimeSelector.propTypes = propTypes
export default TimeSelector
