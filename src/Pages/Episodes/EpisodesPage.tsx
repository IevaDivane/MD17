import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEpisodes, Episode } from '../Data/EpisodesData';
import './episodesPage.scss';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<Episode[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const episodes = getEpisodes();
    setVisibleEpisodes(episodes);
  }, []);

  return (
    <div>
      <h1>All episodes</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10">
            <div className="box--all">
              {visibleEpisodes && visibleEpisodes.map(({ id, name }) => (
                <div key={Math.random()} className="box--characters">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  {/* <img src={image} alt="characters-image" className="box--image" /> */}
                  <span>
                    {' '}
                    ID:
                    {' '}
                    {id}
                    {' '}
                  </span>
                  <span>
                    Episodes Name:
                    {' '}
                    {name}
                    {' '}
                  </span>
                  <button className="button" onClick={() => navigate(`/episode/${id}`)}>Read More</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EpisodesPage;
// {visibleCharacters && visibleCharacters.map(({ results }) => (
//     <div>
//       <span>{results.map((id) => id)}</span>
//       <span>{results.map((name) => name)}</span>
//       <button onClick={() => navigate(`/users/${results.map((id) => id)}`)}>Read More</button>
//     </div>
// ))}
