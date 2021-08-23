import React, { FormEvent, useState } from 'react';

import { validateEmail, validateName } from '../../utils/validators';
import './style.scss';

interface IForm {
  setFormValues: (formValues: any) => void;
}

const Form: React.FC<IForm> = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [agree, setAgree] = useState(false);
  const [terms, setTerms] = useState(false);

  const reset = (): void => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setBirthDate('');
    setAgree(false);
    setTerms(false);
  };

  const handleSubmit = (ev: FormEvent): void => {
    ev.preventDefault();
    if (
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(email) &&
      birthDate &&
      agree &&
      terms
    ) {
      setFormValues({
        firstName,
        lastName,
        email,
        birthDate,
        country,
      });
      reset();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="firstName">
        name
        <input
          className="form__text-input"
          type="text"
          id="firstName"
          value={firstName}
          onChange={ev => setFirstName(ev.target.value)}
        />
        {validateName(firstName) ? (
          <p className="form__text-hint correct">great name</p>
        ) : (
          <p className="form__text-hint wrong">this field should be filled</p>
        )}
      </label>
      <label className="form__label" htmlFor="lastName">
        surname
        <input
          className="form__text-input"
          type="text"
          id="lastName"
          value={lastName}
          onChange={ev => setLastName(ev.target.value)}
        />
        {validateName(lastName) ? (
          <p className="form__text-hint correct">great surname</p>
        ) : (
          <p className="form__text-hint wrong">this field should be filled</p>
        )}
      </label>
      <label className="form__label" htmlFor="email">
        email
        <input
          className="form__text-input"
          type="text"
          id="lastName"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        {validateEmail(email) ? (
          <p className="form__text-hint correct">great email</p>
        ) : (
          <p className="form__text-hint wrong">this field should be filled </p>
        )}
      </label>
      <label className="form__label" htmlFor="birthDate">
        birth date
        <input
          className="form__text-input"
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={ev => setBirthDate(ev.target.value)}
        />
        {birthDate ? (
          <p className="form__text-hint correct">great birth date</p>
        ) : (
          <p className="form__text-hint wrong">this field should be filled</p>
        )}
      </label>
      <label className="form__label" htmlFor="country">
        country
        <select
          className="form__select"
          id="country"
          value={country}
          onChange={ev => setCountry(ev.target.value)}>
          <option>Russia</option>
          <option>Czech Republic</option>
          <option>Germany</option>
          <option>Ukraine</option>
          <option>Belarus</option>
        </select>
      </label>
      <label className="form__label form__label-agree" htmlFor="agreement">
        <p>I agree to the processing of Personal Data</p>
        <input
          className="form__checkbox"
          type="checkbox"
          id="agreement"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
      </label>
      {agree ? (
        <span />
      ) : (
        <p className="form__text-hint wrong">this field should be filled</p>
      )}
      <div className="form__switch-wrapper">
        <p className="form__text">I have read the Terms of use</p>
        <label className="form__switch" htmlFor="subscribe">
          <input
            type="checkbox"
            id="subscribe"
            checked={terms}
            onChange={() => setTerms(!terms)}
          />
          <span className="slider round" />
        </label>
        {terms ? (
          <span />
        ) : (
          <p className="form__text-hint wrong">this field should be filled</p>
        )}
      </div>
      <input className="form__submit-input" type="submit" value="Send" />
    </form>
  );
};

export default Form;
