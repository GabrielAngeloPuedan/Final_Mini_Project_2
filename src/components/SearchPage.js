import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchPage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?q=${query}`);
  };

  return (
    <div>
      <h1>Search for News</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
