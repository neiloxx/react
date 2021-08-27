import React from 'react';
import { IArticle } from '../../types';

import './style.scss';

const Article: React.FC<IArticle> = ({
  author,
  title,
  content,
  publishedAt,
  source,
  urlToImage,
}) => {
  return (
    <div className="article">
      <h2 className="article__title">{title}</h2>
      <img className="article__image" src={urlToImage} alt={title} />
      <p className="article__content">{content}</p>
      <div className="article__inner">
        <p className="article__published">{publishedAt}</p>
        <p className="article__author">{author}</p>
      </div>
      <p className="article__source">read more at {source.name}</p>
    </div>
  );
};

export default Article;
