import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './error.module.scss';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.space} />
      <div className={styles.wrapper}>
        <div>
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
