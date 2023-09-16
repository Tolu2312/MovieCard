// App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The kidnapping day',
      description: 'A clumsy kidnapper kidnaps a genius girl!',
      posterURL: 'https://www.thenetnaija.net/videos/kdrama/19611-the-kidnapping-day',
      rating: 4.5,
    },
    {
      title: 'Han River Police',
      description: 'A policeman and his team handle different incidents and accidents that occur in Han River.',
      posterURL: ' https://www.imdb.com/title/tt28090631/',
      rating: 4.5,
    },
    // Add more initial movie objects here
  ]);

  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleFilterChange = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (!filters.rating || movie.rating >= parseFloat(filters.rating))
  );

  return (
    <div className="App">
      <h1>Movie Library</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
