import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Character, CharacterResults } from '../../Models/CharactersModels';
import './charactersPage.scss';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<CharacterResults[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const navigate = useNavigate();

  const getCharacters = async () => {
    const params = activeFilter === 'all' ? '' : `?status=${activeFilter}`;
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${params}`); //
      setCharacters(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.status === 404 ? 'Nothing to show' : error.message;
        setErrorMessage(message);
      } else {
        setErrorMessage('Not Axios Error');
      }
    } finally {
      console.log('BEIGAS');
    }
  };

  useEffect(() => {
    getCharacters().then();
  }, [activeFilter]);

  const getColor = (status:string) => {
    const notAliveColor = status === 'Dead' ? 'red' : 'grey';
    return status === 'Alive' ? 'green' : notAliveColor;
  };

  return (
    <div>
      <h1>All Characters</h1>
      <div className="buttons">
        <button type="button" className=" btn btn--all" onClick={() => setActiveFilter('all')}>All</button>
        <button type="button" className="btn btn--dead" onClick={() => setActiveFilter('dead')}>Dead</button>
        <button type="button" className="btn btn--alive" onClick={() => setActiveFilter('alive')}>Alive</button>
        <button type="button" className="btn btn--unknown" onClick={() => setActiveFilter('unknown')}>Unknown</button>
      </div>
      <div className="container">
        <div className="box--all">
          {characters && characters.map(({
            id, name, image, status,
          }) => (
            <div key={id} className="box--characters" style={{ backgroundColor: getColor(status) }}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={image} alt="characters-image" className="box--image" />
              <span>
                {' '}
                ID:
                {' '}
                {id}
                {' '}
              </span>
              <span>
                Characters Name:
                {' '}
                {name}
                {' '}
              </span>
              <button className="button" onClick={() => navigate(`/characters/${id}`)}>Read More</button>
            </div>
          ))}
        </div>
        { errorMessage && (
        <span>
          {' '}
          {errorMessage}
        </span>
        )}
      </div>
    </div>

  );
};
export default CharactersPage;
