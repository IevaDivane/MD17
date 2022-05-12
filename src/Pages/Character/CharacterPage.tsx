import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import characters, { Character } from '../Data/CharacterData';
import './characterPage.scss';
import Loader from '../../Components/Loader/Loader';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState();

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
  }, [activeFilter]);

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
      <div className="box--with-buttons">
        <button className="button-back-next" onClick={() => changeBackCharacter()}>prev</button>
        <div className="box--character">
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
        <button className="button-back-next" onClick={() => changeNextCharacter()}>next</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};
export default CharacterPage;
