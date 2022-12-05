import React from 'react';

import './GameList.css';

import Games from './components/Games/Games';

const GameList = () => {
  const games = [
    {
      id: 'e1',
      title: 'Catar - Equador',
      date: new Date(2022, 10, 20),
    },
    { id: 'e2', title: 'Inglaterra - Irã', date: new Date(2022, 11, 21) },
    {
      id: 'e3',
      title: 'Mexico - Polonia',
      date: new Date(2022, 10, 22),
    },
    {
      id: 'e4',
      title: 'França - Austrália',
      date: new Date(2022, 10, 22),
    },
    {
      id: 'e5',
      title: 'Portugal - Gana',
      date: new Date(2022, 10, 24),
    },
  ];

  return (
    <div>
      <br></br>
      <h2>Fifa world cup qatar 2022 calendar</h2>
      <Games items={games} />
    </div>
  );
}

export default GameList;
