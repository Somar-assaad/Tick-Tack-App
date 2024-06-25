/* eslint-disable react/prop-types */
import { useState } from "react"
export default function Player({inisialName,symbole,isActive,playerChange}){
  const [playerName,setplayerName]=useState(inisialName);
    const [isEditing,setIsEditing]=useState(false);
    let pName=<span className="player-name">{playerName}</span>
  function handleChange(event) {
    setplayerName(event.target.value)
  }
  function editFun(){
    setIsEditing((editing)=>{return !editing })
    if(isEditing){
      playerChange(symbole,playerName)
    }
  }
 if(isEditing){
    pName=<input type="text" required value={playerName} onChange={handleChange}/>
 }
  return(
        <li className={isActive?'active':undefined}>
          <span className="player">
          {pName}
          <span className="player-symbol">{symbole}</span>
          </span>
          <button id='btn' onClick={editFun}>{isEditing?'Save':'Edit'}</button>
        </li>
    )
}