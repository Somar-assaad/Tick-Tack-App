/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export default function Gameover({winner,onRestart}){
    
   
   return <div id="game-over">
        <h2>The game over</h2>
        {winner && <p> the Winner is:  {winner}</p>}
        {!winner && <p>It's Draw</p>}
        <button onClick={onRestart}>Rematch</button>
    </div>
}