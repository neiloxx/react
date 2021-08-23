import React from 'react';

import './style.scss';

export interface ICard {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  country: string;
}

const Card: React.FC<ICard> = ({
  firstName,
  lastName,
  email,
  birthDate,
  country,
}) => {
  return (
    <div className="card">
      <h3 className="card__title">{`${firstName} ${lastName}`}</h3>
      <p className="card__text">
        <b>email</b>: {email}
      </p>
      <p className="card__text">
        <b>country:</b> {country}
      </p>
      <p className="card__text">
        <b>birth date:</b> {birthDate}
      </p>
      <p className="card__welcome">greetengs</p>
    </div>
  );
};

export default Card;
