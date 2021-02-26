import React, { Component } from 'react'

class Square extends Component{
  
  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
  }
  
  render(){
    return(
      <>
        <div className='square' onClick={ this.handleClick }>
          <p className='value'>{this.props.value}</p>
        </div>
      </>
    )
  }
}
export default Square
