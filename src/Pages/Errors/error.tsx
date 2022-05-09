import React from 'react';
import './error.scss';
import { Outlet, useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="background-img">
      <div className="space" />
      <div className="wrapper">
        <div className="img-wrapper">
          <span>44</span>
        </div>
        <button type="button" onClick={() => navigate('/')}>GET ME HOME</button>
        <p>
          The page you are trying to search has been
          <br />
          {' '}
          moved to another universe.
        </p>
        <Outlet />
      </div>
    </div>
  );
};
export default Error;
