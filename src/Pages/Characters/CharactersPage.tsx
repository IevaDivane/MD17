import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CharacterResults } from '../../Models/CharactersModels';
import styles from './charactersPage.module.scss';

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
    }
  };

  useEffect(() => {
    getCharacters().then();
  }, [activeFilter]);

  const getColor = (status:string) => {
    const notAliveColor = status === 'Dead' ? '#FF00002C' : '#80808068';
    return status === 'Alive' ? '#00800073' : notAliveColor;
  };

  return (
    <div>
      <h1>All Characters</h1>
      <div className={styles.buttons}>
        <button type="button" className={styles.btnAll} onClick={() => setActiveFilter('all')}>All</button>
        <button type="button" className={styles.btnDead} onClick={() => setActiveFilter('dead')}>Dead</button>
        <button type="button" className={styles.btnAlive} onClick={() => setActiveFilter('alive')}>Alive</button>
        <button type="button" className={styles.btnUnknown} onClick={() => setActiveFilter('unknown')}>Unknown</button>
      </div>
      <div className="container">
        <div className={styles.boxAll}>
          {characters && characters.map(({
            id, name, image, status,
          }) => (
            <div key={id} className={styles.boxCharacters} style={{ backgroundColor: getColor(status) }}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={image} alt="characters-image" className={styles.boxImage} />
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
              <button className={styles.button} onClick={() => navigate(`/characters/${id}`)}>Read More</button>
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
