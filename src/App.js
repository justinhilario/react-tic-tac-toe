import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playersTurn: 1
    }
  }

  handleGamePlay = (index) => {
    const { squares, playersTurn } = this.state
    // want 'X' or 'O' to show up per click 
    // player 1 = X player 2 = O need to switch
    if(playersTurn === 1) {
      squares[index] = '❌'
      this.setState({ squares: squares, playersTurn: playersTurn + 1})
    } else if(playersTurn === 2) {
      squares[index] = '⭕️'
      this.setState({ squares: squares, playersTurn: playersTurn - 1})
    }
  }


  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameboard'>
          { this.state.squares.map((value, index) => {
            return (
              <Square 
                    value={ value }
                    index={ index }
                    key={ index }
                    handleGamePlay={ this.handleGamePlay }
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
