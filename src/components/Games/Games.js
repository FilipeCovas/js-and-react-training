import React from 'react';

import GameItem from './GameItem';
import Card from '../UI/Card';
import './Games.css';

const Games = (props) => {
  
  return (
    <Card className="games">
      <GameItem
        title={props.items[0].title}
        result={props.items[0].result}
        date={props.items[0].date}
      />
      <GameItem
        title={props.items[1].title}
        result={props.items[1].result}
        date={props.items[1].date}
      />
      <GameItem
        title={props.items[2].title}
        result={props.items[2].result}
        date={props.items[2].date}
      />
      <GameItem
        title={props.items[3].title}
        result={props.items[3].result}
        date={props.items[3].date}
      />
      <GameItem
        title={props.items[4].title}
        result={props.items[4].result}
        date={props.items[4].date}
      />
    </Card>
  );
}

export default Games;
