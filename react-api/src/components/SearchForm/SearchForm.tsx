import React, { ChangeEvent, useEffect, useState } from 'react';
import { getResponse } from '../../api/api';
import { SortType } from '../../types';
import pageHandler from '../../utils/pageHandler';

import './style.scss';

interface IForm {
  setArticles: (formValues: any) => void;
  setResults: (formValues: any) => void;
}

const SearchForm: React.FC<IForm> = ({ setArticles, setResults }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState<number>(1);
  const [artOnPage, setArtOnPage] = useState<number>(10);
  const [pageQuantity, setPageQuantity] = useState<number>(0);

  const handleFetch = (
    sort: SortType,
    curPage: number,
    articlesOnPage: number,
  ): void => {
    setIsLoading(true);
    setArticles([]);
    try {
      getResponse(searchValue, sort, articlesOnPage, curPage).then(res => {
        setArticles(res.data.articles);
        setArtOnPage(articlesOnPage);
        setResults(res.data.totalResults);
        setPageQuantity(pageHandler(res.data.totalResults, artOnPage));
      });
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (
    e: ChangeEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    handleFetch(sortBy, page, artOnPage);
  };

  useEffect(() => {
    if (searchValue) {
      handleFetch(sortBy, page, artOnPage);
    }
  }, [sortBy, page, artOnPage]);

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
        <label className="search-form__radios-label" htmlFor="radio-relevancy">
          <input
            className="search-form__radios-input"
            id="radio-relevancy"
            type="radio"
            value={SortType.relevancy}
            checked={sortBy === SortType.relevancy}
            onClick={() => setSortBy(SortType.relevancy)}
          />
          relevancy
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
      <div className="search-form__controls">
        <p className="search-form__controls__text">
          page:{' '}
          <span>
            {pageQuantity && page} / {pageQuantity}
          </span>
        </p>
        <label
          className="search-form__controls__label-input"
          htmlFor="page-input">
          go to{' '}
          <input
            className="search-form__controls__input-page"
            id="page-input"
            placeholder="Enter number"
            onChange={e => {
              if (+e.target.value > 0 && +e.target.value <= pageQuantity) {
                setPage(+e.target.value);
              }
            }}
          />{' '}
          page
        </label>
        <label
          className="search-form__controls__label-select"
          htmlFor="art-on-page-select">
          Result on page
          <select
            className="search-form__controls__select"
            id="art-on-page-select"
            value={artOnPage}
            onChange={e => {
              setArtOnPage(+e.target.value);
              setPage(1);
            }}>
            <option className="search-form__controls__select-option">5</option>
            <option className="search-form__controls__select-option">8</option>
            <option className="search-form__controls__select-option">10</option>
            <option className="search-form__controls__select-option">15</option>
          </select>
        </label>
        <div className="search-form__controls__btns">
          <button
            type="button"
            className="search-form__controls__btns-btn"
            onClick={() => setPage(page - 1)}
            disabled={page === 1 || isLoading}>
            previous page
          </button>
          <button
            type="button"
            className="search-form__controls__btns-btn"
            onClick={() => setPage(page + 1)}
            disabled={page >= pageQuantity || isLoading}>
            next page
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
