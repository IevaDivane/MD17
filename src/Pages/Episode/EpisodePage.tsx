import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Episode, getEpisode } from '../Data/EpisodesData';
import './episodePage.scss';

const EpisodePage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const episode = getEpisode(Number(id));

    if (episode) {
      setCurrentEpisode(episode);
    } else {
      navigate('/about');
    }
  }, []);

  return (
    <div>
      <h1>Something about episodes</h1>
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
    </div>
  );
};

export default EpisodePage;
