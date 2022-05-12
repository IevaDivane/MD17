import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { LocationResults } from '../../Models/LocationModels';
import './locationsPage.scss';

const LocationsPage = () => {
  const [locations, setLocations] = useState<LocationResults[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate = useNavigate();

  const getLocations = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/location/');
      // await var vairākus taisīt šajā gadījumā const response2 = await ..., const response3 = await ..
      setLocations(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.status === 404 ? 'nothing to show' : error.message;
        setErrorMessage(message);
      } else {
        setErrorMessage(' Not Axios ');
      }
    } finally {
      // isLoading = false;
      console.log('beigas');
    }
  };

  useEffect(() => {
    getLocations().then();
  }, []);

  return (
    <div>
      <h1>Location Page</h1>
      <div className="box--all">
        {locations && locations.map(({ id, name, type }) => (
          <div key={Math.random()} className="box--locations">
            <span>
              ID:
              {id}
            </span>
            <span>
              <p>
                {`Name: ${name}`}
              </p>
            </span>
            <span>
              Type:
              {type}
            </span>
            <button className="button" onClick={() => navigate(`/locations/${id}`)}>Read more</button>
          </div>
        ))}
      </div>
      { errorMessage && (
        <span>
          {' '}
          {errorMessage}
        </span>
      )}
    </div>
  );
};
export default LocationsPage;
