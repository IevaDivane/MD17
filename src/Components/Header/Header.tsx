import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.scss';

const getActiveLinkClassName = (isActive:boolean) => (isActive ? 'link link--active' : 'link');

const Header = () => (
  <div>
    <header className="header">
      <nav className="header--links">
        <NavLink
          className={({ isActive }) => getActiveLinkClassName(isActive)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => getActiveLinkClassName(isActive)}
          to="/characters"
        >
          Characters
        </NavLink>
        <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/episodes">Episodes </NavLink>
        <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/locations">Location </NavLink>
        <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/about">About </NavLink>
      </nav>
    </header>
  </div>
);

export default Header;
