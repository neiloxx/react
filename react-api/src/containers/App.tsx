import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Article from '../components/Article/Article';
import './style.scss';

const defaultImage = './public/assets/images/default-image.jpg';

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);
  const [results, setResults] = useState<number>(0);

  return (
    <main className="main">
      <h1 className="main__title">react. api</h1>
      <SearchForm setArticles={setArticles} setResults={setResults} />
      <div className="main__articles-field">
        {!articles.length ? (
          results ? (
            <p>Loading</p>
          ) : (
            <p>No results</p>
          )
        ) : (
          articles.map(article => (
            <Article
              key={`${article.author}-${article.title}-${article.publishedAt}`}
              author={article.author}
              title={article.title}
              content={article.content}
              publishedAt={article.publishedAt}
              source={article.source}
              urlToImage={article.urlToImage || defaultImage}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default App;
