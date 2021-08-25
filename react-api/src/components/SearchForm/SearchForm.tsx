import React, { ChangeEvent, useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance, { API_KEY } from '../../api/api';

import './style.scss';

interface IForm {
  setArticles: (formValues: any) => void;
}

const SearchForm: React.FC<IForm> = ({ setArticles }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: ChangeEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axiosInstance.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}`,
      );
      setArticles(response.data.articles);
    } catch (err: any) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-bar" htmlFor="search-bar">
        <input
          className="search-bar__input"
          id="search-bar"
          type="text"
          value={searchValue}
          placeholder="Search..."
          onChange={e => setSearchValue(e.target.value)}
        />
        <button
          className="search-bar__btn"
          type="submit"
          disabled={!searchValue || isLoading}
        />
      </label>
    </form>
  );
};

export default SearchForm;
