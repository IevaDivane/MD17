import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters, Character } from '../Data/CharacterData';
import './charactersPage.scss';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  }, []);

  return (
    <div>
      <h1>All Characters</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10">
            <div className="box--all">
              {visibleCharacters && visibleCharacters.map(({ id, name, image }) => (
                <div key={Math.random()} className="box--characters">
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
                  <button className="button" onClick={() => navigate(`/character/${id}`)}>Read More</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharactersPage;
// {visibleCharacters && visibleCharacters.map(({ results }) => (
//     <div>
//       <span>{results.map((id) => id)}</span>
//       <span>{results.map((name) => name)}</span>
//       <button onClick={() => navigate(`/users/${results.map((id) => id)}`)}>Read More</button>
//     </div>
// ))}
