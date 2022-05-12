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
import LocationsPage from './Pages/Locations/LocationsPage';
import LocationPage from './Pages/Location/LocationPage';
import Header from './Components/Header/Header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<EpisodePage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:id" element={<LocationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </div>
);

export default App;
