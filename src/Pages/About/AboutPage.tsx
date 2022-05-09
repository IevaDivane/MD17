import React from 'react';
import './about.scss';

const AboutPage = () => (
  <div className="text">
    <h1>About Rick and Morty</h1>
    <div className="text--paragraph-all-content">
      <p className="text--paragraph">
        Rick and Morty is an American adult animated science fiction sitcom created by
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.
        The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted,
        but fretful grandson Morty Smith,
        who split their time between domestic life and interdimensional adventures.
      </p>
    </div>
  </div>
);

export default AboutPage;
