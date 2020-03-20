import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  //state hook:
  const [characters, setCharacters] = useState([]);

  //use effect:
  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then(response => {
      // console.log(response)
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
  }, [])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {console.log(characters)}

      {characters.map((character, index) => {
        return (
          <Character 
            name={character.name} 
            key={index} 
            height={character.height}
            gender={character.gender}
          />
        )
      })}

    </div>
  );
}

export default App;
