import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Hiddn strike',
      description: 'Description for Movie 1',
      posterURL: 'https://i.pinimg.com/236x/51/eb/3a/51eb3a6566697dcd346135355a5498b8.jpg',
      rating: 4.5
    },
    {
            title: "Star Wars: Episode IV - A New Hope",
            description: "1977",
            // imdbID: "tt0076759",
            // Type: "movie",
            posterURL: "https://i.pinimg.com/236x/bb/29/49/bb2949699f2fb63a09a1dc234989657a.jpg",
        rating: 2.2 },
        {
            title: "Star Wars: Episode V - The Empire Strikes Back",
            description: "1980",
            // imdbID: "tt0080684",
            // Type: "movie",
            posterURL: "https://i.pinimg.com/236x/ab/16/13/ab1613c9cd9ca80a2f0ecb2b925b7959.jpg",
        rating: 5},
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      description: "1983",
      // imdbID: "tt0086190",
      // Type: "movie",
      posterURL: "https://i.pinimg.com/236x/4c/eb/13/4ceb13342061a75bc822355908f75555.jpg",
   rating: 3.2  }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = event => {
    setFilterTitle(event.target.value);
  };

  const handleRatingChange = event => {
    setFilterRating(event.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (!filterRating || movie.rating >= filterRating)
    );
  });

  return (
    <div className="App">
      <h1>Movie Library</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;