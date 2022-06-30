import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LocationResults, Location } from '../../Models/LocationModels';
import Loader from '../../Components/Loader/Loader';
import styles from './locationPage.module.scss';

const LocationPage = () => {
  const [location, setLocation] = useState<LocationResults>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getLocation = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
      setLocation(response.data);
    } catch (error) {
      navigate('/locations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getLocation().then();
    }
  }, []);

  const changeNextLocation = () => {
    navigate(`/locations/${Number(id) + 1}`);
    getLocation().then();
  };

  const changeBackLocation = () => {
    navigate(`/locations/${Number(id) - 1}`);
    getLocation().then();
  };

  return (
    <div>
      <h1>Something about location</h1>
      <div className={styles.boxWithButtons}>
        <button className={styles.buttonBackNext} onClick={() => changeBackLocation()}>next</button>
        <div className={styles.boxLocation}>
          <span>
            ID:
            {' '}
            {location?.id}
          </span>
          <span>
            Name :
            {' '}
            {location?.name}
          </span>

          <span>
            Type:
            {location?.type}
          </span>
          <span>
            Dimension:
            {location?.dimension}
          </span>
          <button className="button" onClick={() => navigate('/locations')}>Back to all locations</button>
        </div>
        <button className={styles.buttonBackNext} onClick={() => changeNextLocation()}>next</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default LocationPage;
