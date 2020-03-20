import React from "react";
import styled from 'styled-components';


const Character = props => {
    return (
        <div>
            <h2>{props.name}</h2> 
            <h2>{props.height}</h2>
            <h2>{props.gender}</h2>
        </div>
    )
}

export default Character;