import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Episode } from '../Data/EpisodesData';
import styles from './episodesPage.module.scss';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<Episode[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [activeFilter, setActiveFilter] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const getEpisodes = async () => {
    console.log(searchParams);
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
        <button onClick={() => setSearchParams({ name: activeFilter })}>Search</button>
      </div>
      <div className={styles.boxAll}>
        {visibleEpisodes && visibleEpisodes.map(({ id, name }) => (
          <div key={id} className={styles.boxEpisodes}>
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
            <button className={styles.button} onClick={() => navigate(`/episodes/${id}`)}>Read More</button>
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
