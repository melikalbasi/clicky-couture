import React from "react";

const CharacterCard = props => {
 return (
   <div onClick={() => props.click(props.character.id)} >
    <img src={props.character.link}/>
   </div>
 )
}

export default CharacterCard;