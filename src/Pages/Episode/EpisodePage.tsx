import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Episode } from '../Data/EpisodesData';
import './episodePage.scss';
import Loader from '../../Components/Loader/Loader';

const EpisodePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const getEpisode = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      setCurrentEpisode(response.data);
    } catch (error) {
      navigate('/characters');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getEpisode().then();
    }
  }, []);

  const changeBackEpisode = () => {
    navigate(`/episodes/${Number(id) - 1}`);
    getEpisode().then();
  };

  const changeNextEpisode = () => {
    navigate(`/episodes/${Number(id) + 1}`);
    getEpisode().then();
  };

  return (
    <div>
      <h1>Something about episodes</h1>
      <div className="box--with-buttons">
        <button className="button-back-next" onClick={() => changeBackEpisode()}>prev</button>
        <div className="box--character">
          <span>
            This episode nami is
            {' '}
            {currentEpisode?.name}
          </span>
          <span>
            {' '}
            Air-date:
            {' '}
            {currentEpisode?.air_date}
          </span>
          <span>
            {' '}
            Episode/Season :
            {' '}
            {currentEpisode?.episode}
          </span>
          <span>
            {' '}
            Created:
            {' '}
            {currentEpisode?.created}
          </span>
          <button className="button" onClick={() => navigate('/episodes')}>Back to all episodes</button>
        </div>
        <button className="button-back-next" onClick={() => changeNextEpisode()}>next</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default EpisodePage;
