import React from 'react';

import GameDate from './GameDate.js';
import Card from '../UI/Card';
import './GameItem.css';

const GameItem = (props) => {
  return (
    <Card className='game-item'>
      <GameDate date={props.date} />
      <div className='game-item__description'>
        <h2>{props.title}</h2>
        <div className='game-item__result'>{props.result}</div>
      </div>
    </Card>
  );
}

export default GameItem;
