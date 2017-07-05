import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/index'
import TextField from 'material-ui/TextField'
import AddButton from '../../components/buttons/AddButton'
import CircularProgress from 'material-ui/CircularProgress'

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool.isRequired,
  addTodo: PropTypes.func.isRequired
}

class TodoInput extends Component {
  constructor(props){
    super(props)

    this.state = {body: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChangeInput(e){
    e.preventDefault()
    this.setState({body: e.target.value})
  }

  handleKeyDown(e){
    if(e.keyCode === 13){
      this.handleSubmit(e)
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.addTodo(this.state.body)
    this.setState({body: ''})
  }

  render(){
    const {isFetching, isUploading} = this.props
    const {body} = this.state

    return (
      <div className='u-flex-container u-flex-baseline' style={{padding: '1rem 0'}}>
        <TextField
          className='u-flex-full'
          disabled={isFetching || isUploading}
          fullWidth={true}
          floatingLabelText="Input yout task"
          name='todo_input'
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyDown}
          value={body}
        />

        {isUploading &&
          <div
            className="u-flex-container u-flex-center"
            style={{
              width: "48px",
              height: "36px",
              paddingLeft: "12px"
            }}>
            <CircularProgress size={24} />
          </div>
        }
        {!isUploading &&
          <AddButton
            onClick={this.handleSubmit}
            disabled={body.length <= 0}
          />
        }
      </div>
    )
  }
}

TodoInput.propTypes = propTypes

const mapStateToProps = state => ({
  isFetching: state.todos.isFetching,
  isUploading: state.todos.isUploading
})

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch)
})

TodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)

export default TodoInput
