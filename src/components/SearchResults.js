import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchResults = () => {
  const location = useLocation();

  const [articles, setArticles] = useState([]);
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchNews = async () => {
      if (query) {
        try {
          const response = await fetch(
            `https://gnews.io/api/v4/search?q=${query}&token=c80ea808b4443ac718aaced8ba3d08f6`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchNews();
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <div className="max-w-7xl mx-auto py-7">
        {articles.map((article, index) => (
          <div
            key={index}
            className="article-card"
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
