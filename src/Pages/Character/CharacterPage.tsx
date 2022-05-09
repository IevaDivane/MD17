import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Character, getCharacter } from '../Data/CharacterData';
import './characterPage.scss';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const character = getCharacter(Number(id));

    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/about');
    }
  }, []);

  return (
    <div>
      <h1>Something about character</h1>
      <div className="box--character">
        <span>
          This character nami is
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
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={currentCharacter?.image} alt="characters-image" className="box--character-image" />
        <button className="button" onClick={() => navigate('/characters')}>Back to all characters</button>

      </div>
    </div>
  );
};
export default CharacterPage;
