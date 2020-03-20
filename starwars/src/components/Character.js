import React from "react";
import styled from 'styled-components';


const Character = props => {
    return (
        <Outer>
            <Container>
                <CharName>{props.name}</CharName> 
                <CharHeight>{props.height}</CharHeight>
                <CharGender>{props.gender}</CharGender>
            </Container>
        </Outer>
    )
}

// STYLED COMPONENTS:

const Outer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 50%;
    padding: 5px;
    margin: 20px;
    border: 5px solid black;
    border-radius: 50%;
    background-color: #ebc8b2;
    opacity: 0.6;
`

const CharName = styled.h2`
    text-decoration: underline;
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px;
    background-color: #cc7138;
    justify-content: center;
    align-items: center;
    width: 30%;
`

const CharHeight = styled.h2`
    border: 2px dotted black;
    border-radius: 10px;
    padding: 5px;
    background-color: #cc7138;
    justify-content: center;
    align-items: center;
    width: 30%;
`

const CharGender = styled.h2`
    border: 2px dotted black;
    border-radius: 10px;
    padding: 5px;
    background-color: #cc7138;
    justify-content: center;
    align-items: center;
    width: 30%;
`

export default Character;