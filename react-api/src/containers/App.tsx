import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Article from '../components/Article/Article';
import './style.scss';

const defaultImage = './public/assets/images/default-image.jpg';

const App: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]);

  return (
    <main className="main">
      <h1 className="main__title">react. api</h1>
      <SearchForm setArticles={setArticles} />
      <div className="main__articles-field">
        {articles.map(article => (
          <Article
            key={`${article.author}${article.title}`}
            author={article.author}
            title={article.title}
            content={article.content}
            publishedAt={article.publishedAt}
            source={article.source}
            urlToImage={article.urlToImage || defaultImage}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
