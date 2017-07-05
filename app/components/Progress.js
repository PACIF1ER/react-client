import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default (props) => (
  <div className='text-center' style={{marginTop: '2rem'}}>
    <CircularProgress
      size={80}
      thickness={5}
    />
  </div>
)
