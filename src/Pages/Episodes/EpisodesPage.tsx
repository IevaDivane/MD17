import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Episode } from '../Data/EpisodesData';
import './episodesPage.scss';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<Episode[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [activeFilter, setActiveFilter] = useState<string>('');
  const navigate = useNavigate();

  const getEpisodes = async () => {
    const params = activeFilter === '' ? '' : `?name=${activeFilter}`;
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${params}`);
      setVisibleEpisodes(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.status === 404 ? 'Nothing to show' : error.message;
        setErrorMessage(message);
      } else {
        setErrorMessage('Not Axios Error');
      }
    } finally {
      console.log('beigas');
    }
  };

  useEffect(() => {
    getEpisodes().then();
  }, [activeFilter]);

  useEffect(() => {
    setErrorMessage('');
  }, [visibleEpisodes]);

  useEffect(() => {
    if (errorMessage !== '') {
      setVisibleEpisodes([]);
    }
  }, [errorMessage]);

  return (
    <div>
      <h1>All episodes</h1>
      <div>
        <input type="text" placeholder="Search by name" onChange={(e) => setActiveFilter(e.target.value)} />
      </div>
      <div className="box--all">
        {visibleEpisodes && visibleEpisodes.map(({ id, name }) => (
          <div key={Math.random()} className="box--characters">
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
            <button className="button" onClick={() => navigate(`/episodes/${id}`)}>Read More</button>
          </div>
        ))}
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
export default EpisodesPage;
