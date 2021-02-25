import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
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
  // push joined numbers into players empty arrays, if theres a winning combo, have an includes that looks for that
  // .some() ???
  // winner, reset, game state


  // so far we are able to index each players moves and differentiate between player turns
  // figure out endgame


  calculateWinner = (squares)  => {
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  for (let i = 0; i < winCombo.length; i++) {
		const [a, b, c] = winCombo[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

  handleGamePlay = (index) => {
    const { squares, playersTurn, playerOne, playerTwo, winCombo } = this.state
    if(playersTurn === 1) {
      squares[index] = '❌'
          this.setState({squares: squares, playersTurn: playersTurn + 1, playerOne: [...this.state.playerOne, index]})
          if (this.calculateWinner(squares) !==  null){
            this.setState({ playersTurn: 0 })
            setTimeout(function () {alert("YOU WON!")}, 300 )
          } 
    } else if(playersTurn === 2) {
      squares[index] = '⭕️'
      this.setState({ squares: squares, playersTurn: playersTurn - 1, playerTwo: [...this.state.playerTwo, index]})
      if (this.calculateWinner(squares) !==  null){
        this.setState({ playersTurn: 0 })
        setTimeout(function () {alert("YOU WON!")}, 300 )
      } 
    }
  }


  resetGameboard = () => {
    
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
        <button onClick = { this.render}> </button>
      </>
    )
  }
}
export default App
