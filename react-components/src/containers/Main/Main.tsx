import React from 'react';
import cards from '../../collections/cards';
import Card from '../../components/Card/Card';

import './style.scss';

const Main: React.FC = () => {
  return (
    <main className="main">
      <h2 className="main__title">some text</h2>
      {cards.map(card => (
        <Card
          name={card.name}
          image={card.image}
          url={card.url}
          cities={card.cities}
          key={card.name}
        />
      ))}
    </main>
  );
};

export default Main;
