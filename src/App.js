import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playersTurn: 1,
      playerOne:[],
      playerTwo: [],
      winCombo: [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]  
        ]
    }
  }

  // .some() ???

  handleGamePlay = (index) => {
    const { squares, playersTurn, playerOne, playerTwo, winCombo } = this.state
    // want 'X' or 'O' to show up per click 
    // player 1 = X player 2 = O need to switch
    if(playersTurn === 1) {
      squares[index] = '❌'
      // } if (playerOne.some(value => {

      // } )) {
      this.setState({squares: squares, playersTurn: playersTurn + 1, playerOne: [...this.state.playerOne, index]})
    } else if(playersTurn === 2) {
      squares[index] = '⭕️'
      this.setState({ squares: squares, playersTurn: playersTurn - 1, playerTwo: [...this.state.playerTwo, index]})
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
