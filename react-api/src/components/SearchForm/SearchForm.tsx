import React, { ChangeEvent, useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance, { API_KEY } from '../../api/api';
import { SortType } from '../../types';

import './style.scss';

interface IForm {
  setArticles: (formValues: any) => void;
}

const SearchForm: React.FC<IForm> = ({ setArticles }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);

  const handleSubmit = async (
    e: ChangeEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axiosInstance.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=8`,
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
      <div className="search-form__search-bar">
        <label className="search-form__search-bar__label" htmlFor="search-bar">
          <input
            className="search-form__search-bar__input"
            id="search-bar"
            type="text"
            value={searchValue}
            placeholder="Search..."
            onChange={e => setSearchValue(e.target.value)}
          />
        </label>
        <button
          className="search-form__search-bar__btn"
          type="submit"
          disabled={!searchValue || isLoading}
        />
      </div>
      <div className="search-form__radios">
        <label className="search-form__radios-label" htmlFor="radio-relevancy">
          <input
            className="search-form__radios-input"
            id="radio-relevancy"
            type="radio"
            value={SortType.relevancy}
            checked={sortBy === SortType.relevancy}
            onChange={() => setSortBy(SortType.relevancy)}
          />
          relevancy
        </label>
        <label className="search-form__radios-label" htmlFor="radio-popularity">
          <input
            className="search-form__radios-input"
            id="radio-popularity"
            type="radio"
            value={SortType.popularity}
            checked={sortBy === SortType.popularity}
            onChange={() => setSortBy(SortType.popularity)}
          />
          popularity
        </label>
        <label className="search-form__radios-label" htmlFor="radio-published">
          <input
            className="search-form__radios-input"
            id="radio-published"
            type="radio"
            value={SortType.publishedAt}
            checked={sortBy === SortType.publishedAt}
            onChange={() => setSortBy(SortType.publishedAt)}
          />
          published
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
