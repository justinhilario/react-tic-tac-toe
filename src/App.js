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
      playerOneChoice: "🥦",
      playerTwoChoice: "🍔",
    }
  }

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
    const { squares, playersTurn, playerTwo } = this.state
    if(playerTwo.length === 4){
      setTimeout(function () {alert("DRAW")}, 300 )
    } else if(playersTurn === 1) {
      if(squares[index] === null){
        squares[index] = this.state.playerOneChoice
        this.setState({squares: squares, playersTurn: playersTurn + 1, playerOne: [...this.state.playerOne, index]})
      } else {
        alert("Pick an empty square")
      }
      if (this.calculateWinner(squares) !==  null){
        this.setState({ playersTurn: false })
        // setTimeout(function () {alert(`${this.state.playerOneChoice}  WON!`)} )
      } 
    } else if(playersTurn === 2) {
      if(squares[index] === null){
        squares[index] = this.state.playerTwoChoice
        this.setState({ squares: squares, playersTurn: playersTurn - 1, playerTwo: [...this.state.playerTwo, index]})
      }else {
        alert('Pick an empty square')
      }
      if (this.calculateWinner(squares) !==  null){
        this.setState({ playersTurn: false })
        // setTimeout(function () {alert(`${this.state.playerTwoChoice}  WON!`)}, 300 )
      } 
    }
  }


  resetGameboard = () => {
    this.setState({ squares: [null, null, null, null, null, null, null, null, null], playersTurn: 1, playerOne: [], playerTwo: [] })
  }

  handleChange = (event) => {
    this.setState({playerOneChoice: event.target.value})
  }

  handleChange2 = (event) => {
    this.setState({playerTwoChoice: event.target.value})
  }

  render(){
    return(
      <>
        <h1><span className='healthy'>HEALTHY </span> vs <span className='junk'> JUNK</span></h1>
       <div className='selects' >
       <label> Choose Player One:</label>
       <select onChange={this.handleChange} value={this.state.playerOneChoice} >
         <option value="🥦"> 🥦 </option>
         <option value="🥑"> 🥑 </option>
         <option value="🥬"> 🥬 </option>
         <option value="🍑"> 🍑 </option>
         <option value="🍆"> 🍆 </option>
       </select>
       <label> Choose Player Two:</label>
       <select onChange={this.handleChange2} value= {this.state.playerTwoChoice} >
         <option value= "🍔"> 🍔 </option>
         <option value= "🍤"> 🍤 </option>
         <option value= "🍪"> 🍪 </option>
         <option value= "🍰"> 🍰 </option>
         <option value= "🧋"> 🧋 </option>
       </select>
       </div>
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
        {
          this.state.playersTurn ?
          <h3>PLAYER {this.state.playersTurn}'S TURN</h3> : <h3>Game Over!</h3>
        }
        <button onClick = { this.resetGameboard }> Clear Table</button>
      </>
    )
  }
}
export default App
