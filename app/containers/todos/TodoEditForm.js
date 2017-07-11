import React, {PropTypes, Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import {getEditingTodo} from '../../selectors'
import * as todoFormActions from '../../actions/todoActions'
import * as appActions from '../../actions/appActions'


const propTypes = {
  cancelEdit: PropTypes.func.isRequired,
  editingTodo: PropTypes.object,
  updateTodo: PropTypes.func.isRequired,
  setAppMessage: PropTypes.func.isRequired,
}

class TodoEditForm extends Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      id: "",
      body: ""
    }
  }

  componentDidUpdate(prevProps){
    if(!!this.props.editingTodo && !prevProps.editingTodo){
      this.setState({
        id: this.props.editingTodo.id,
        body: this.props.editingTodo.body
      })
    }
  }

  handleChange(e){
    e.preventDefault()
    e.stopPropagation()
    this.setState({body: e.target.value})
  }

  handleSubmit(e){
    const {updateTodo, setAppMessage} = this.props

    updateTodo(this.state.id, {body: this.state.body})
      .then(message => setAppMessage(message))
  }

  render(){
    const underlineFocusStyle = {
      borderColor: '#692d55'
    }

    return (
      <Dialog
        open={!!this.props.editingTodo}
        onRequestClose={() => this.props.cancelEdit()}
        >
        <TextField
          fullWidth={true}
          name='todo-edit-form'
          onChange={this.handleChange}
          value={this.state.body}
        />
        <div>
          <FlatButton
            disabled={this.state.body.trim() === ""}
            label="Save"
            onClick={this.handleSubmit}
          />
          <FlatButton
            label="Cancel"
            onClick={this.props.cancelEdit}
          />
        </div>
      </Dialog>
    )
  }
}
TodoEditForm.propTypes = propTypes

const mapStateToProps = state => ({
  editingTodo: getEditingTodo(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({...todoFormActions, ...appActions}, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoEditForm)
