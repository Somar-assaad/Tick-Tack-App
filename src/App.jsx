import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS";
import Gameover from "./components/Gameover";
let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurn){
  let currentPlayer='X';
  if(gameTurn.length>0 && gameTurn[0].player===currentPlayer){
    currentPlayer='O';
  }
  return currentPlayer
}
function App() {
  //const [activePlayer,setactivePlayer]=useState('X');
  let winner=null;
  
  const [gameTurn,setgameTurn]=useState([])
  const [players,setPlayers]=useState({
    X:'Player 1',
    O:'Player 2'
  })
  const activePlayer=deriveActivePlayer(gameTurn);
  let gameBoard=[...initialGameBoard.map(row=>[...row])];
  for(const turn of gameTurn){
    const {squre,player}=turn;
    const {row,col}=squre;
    gameBoard[row][col]=player;
  }
  for(const combination of WINNING_COMBINATIONS){
    const firstsqure=gameBoard[combination[0].row][combination[0].column];
    const secondsqure=gameBoard[combination[1].row][combination[1].column];
    const thirdsqure=gameBoard[combination[2].row][combination[2].column];
    if(firstsqure && firstsqure===secondsqure && firstsqure===thirdsqure){
      winner=players[firstsqure];
    }
  }
  function handleselectSqure(rowIndex,colIndex){
   // setactivePlayer((prevplayer)=> prevplayer==='X'?'O':'X');
    setgameTurn((prevTurn)=>{
      
      const currentPlayer=deriveActivePlayer(prevTurn);
      const updateTurn=[{squre:{row:rowIndex,col:colIndex},player:currentPlayer},
        ...prevTurn,]
      return updateTurn;
    })
  }
  function handlePlayersChange(symbole,newName){
    setPlayers((prevplayers)=>{
        return ({
          ...prevplayers,
          [symbole]:newName
        })
    })
  }
  function handleRestart(){
    setgameTurn([]);
  }
  let draw=gameTurn.length===9 && !winner;
  
  return (
   <main>
    <div id='game-container'>
      <ol id='players' className="highlight-player">
        <Player inisialName='player1' symbole='X' isActive={activePlayer==='X'} playerChange={handlePlayersChange}/>
       <Player inisialName='player2' symbole='O' isActive={activePlayer==='O'} playerChange={handlePlayersChange}/>

      </ol>
      {(winner||draw) &&<Gameover winner={winner} onRestart={handleRestart} />}
      <GameBoard onselectedSqure={handleselectSqure} board={gameBoard}/>
    </div>
    <Log turns={gameTurn} />
   </main>
  )
}

export default App