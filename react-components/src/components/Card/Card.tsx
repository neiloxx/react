import React from 'react';
import { ICard } from '../../collections/cards';

import './style.scss';

const Card: React.FC<ICard> = ({ name, image, url, cities }) => {
  return (
    <div className="card">
      <figure className="card__image-container">
        <img
          className="card__image-container-image"
          src={image}
          alt={`${name}`}
          height={200}
        />
        <figcaption className="card__image-container-description">
          {name}
        </figcaption>
      </figure>
      <ul className="card__list">
        {cities.map(city => (
          <li className="card__list-item" key={city.name}>
            <a href={city.url} className="card__list-item-link">
              {city.name} &nbsp;
              <span className="watch-icon" />
              {city.watchers}
            </a>
          </li>
        ))}
      </ul>
      <a href={url} className="card__link">
        watch more
      </a>
    </div>
  );
};

export default Card;
