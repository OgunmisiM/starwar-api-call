import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [character, setCharacter] = useState({
    name: '',
    height: '',
    homeworld: '',
    gender: '',
    image: '',
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const getCharacter = () => {
    setIsLoaded(true);
    const url =
      'https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/63.json';
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setCharacter({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          gender: data.gender,
          image: data.image,
        })
      );
  };

  const { name, height, homeworld, gender, image } = character;
  return (
    <div>
      {isLoaded ? (
        <div>
          <img src={image} alt={name} style={{ width: '300px' }} />
          <h1>{name}</h1>
          <p>
            Has an height of {height}cm and from {homeworld}.
          </p>
          <p>Gender: {gender}</p>
        </div>
      ) : null}

      <button onClick={getCharacter}>Get Character!!!</button>
    </div>
  );
}
