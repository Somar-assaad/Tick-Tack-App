/* eslint-disable react/prop-types */
//import { useState } from "react";


  
  export default function GameBoard({onselectedSqure,board}) {
    
    return (
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={()=> onselectedSqure(rowIndex,colIndex)} disabled={playerSymbol!== null}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
  }
  