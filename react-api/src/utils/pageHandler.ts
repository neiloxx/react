import { MAX_SERVER_RESULT } from '../api/api';

const pageHandler = (totalResult: number, articlesOnPage: number): number => {
  if (totalResult > MAX_SERVER_RESULT) {
    return Math.ceil(MAX_SERVER_RESULT / articlesOnPage);
  }
  return Math.ceil(totalResult / articlesOnPage);
};

export default pageHandler;
