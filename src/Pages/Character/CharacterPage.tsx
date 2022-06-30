import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Character } from '../Data/CharacterData';
import styles from './characterPage.module.scss';
import Loader from '../../Components/Loader/Loader';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const getCharacter = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCurrentCharacter(response.data);
    } catch (error) {
      navigate('/characters');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCharacter().then();
    }
  }, []);

  const changeBackCharacter = () => {
    navigate(`/characters/${Number(id) - 1}`);
    getCharacter().then();
  };
  const changeNextCharacter = () => {
    navigate(`/characters/${Number(id) + 1}`);
    getCharacter().then();
  };
  return (
    <div>
      <h1>Something about character</h1>
      <div className={styles.boxWithButtons}>
        <button className={styles.buttonBackNext} onClick={() => changeBackCharacter()}>prev</button>
        <div className={styles.boxCharacter}>
          <span>
            This character name is
            {' '}
            {currentCharacter?.name}
          </span>
          <span>
            {' '}
            His status:
            {' '}
            {currentCharacter?.status}
          </span>
          <span>
            {' '}
            This character is
            {' '}
            {currentCharacter?.species}
          </span>
          <span>
            {' '}
            And gender -
            {' '}
            {currentCharacter?.gender}
          </span>
          <button className="button" onClick={() => navigate('/characters')}>Back to all characters</button>

        </div>
        <button className={styles.buttonBackNext} onClick={() => changeNextCharacter()}>next</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};
export default CharacterPage;
