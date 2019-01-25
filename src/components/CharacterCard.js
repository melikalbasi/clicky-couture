import React from "react";

const CharacterCard = props => {
 return (
   <div onClick={() => props.click(props.character.id)} >
    <img className="img-fluid hvr-pop" data-clicked={props.clicked} alt={props.character.name} src={props.character.link}/>
   </div>
 )
}

export default CharacterCard;