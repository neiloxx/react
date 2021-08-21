import React from 'react';
import cards from '../../collections/cards';
import Card from '../../components/Card/Card';

import './style.scss';
import SearchBar from '../../components/Search-bar/SearchBar';

const Main: React.FC = () => {
  return (
    <main className="main">
      <h2 className="main__title">choose your travel</h2>
      <SearchBar />
      <div className="main__cards-field">
        {cards.map(card => (
          <Card
            name={card.name}
            image={card.image}
            url={card.url}
            cities={card.cities}
            key={card.name}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
