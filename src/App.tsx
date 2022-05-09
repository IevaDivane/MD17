import React from 'react';
import {
  BrowserRouter as
  Router, Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import CharactersPage from './Pages/Characters/CharactersPage';
import CharacterPage from './Pages/Character/CharacterPage';
import Error from './Pages/Errors/error';
import EpisodesPage from './Pages/Episodes/EpisodesPage';
import EpisodePage from './Pages/Episode/EpisodePage';

const App = () => (
  <div className="App">
    <Router>
      <header className="header">
        <nav className="header--links">
          <NavLink className="link" to="/">Home </NavLink>
          <NavLink className="link" to="/characters">Characters </NavLink>
          <NavLink className="link" to="/episodes">Episodes </NavLink>
          <NavLink className="link" to="/about">About </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episode/:id" element={<EpisodePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </div>
);

export default App;
