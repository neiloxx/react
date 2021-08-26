import React from 'react';

import './style.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        id="search-bar"
        type="text"
        placeholder="Search..."
      />
      <button className="search-bar__btn" type="button" />
    </div>
  );
};

export default SearchBar;
