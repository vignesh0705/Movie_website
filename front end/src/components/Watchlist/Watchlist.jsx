import React from 'react';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../../context/MovieContext';
import './Watchlist.css';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useMovieContext();
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  if (watchlist.length === 0) {
    return (
      <div className="empty-list">
        <h2>Your watchlist is empty</h2>
        <p>Add some movies to watch later!</p>
        <Link to="/" className="browse-link">Browse Movies</Link>
      </div>
    );
  }

  return (
    <div className="watchlist-container">
      <h2>My Watchlist</h2>
      <div className="movie-grid">
        {watchlist.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img 
                src={movie.poster_path 
                  ? `${IMAGE_BASE_URL}${movie.poster_path}`
                  : 'https://via.placeholder.com/500x750/141414/ffffff?text=No+Poster'
                }
                alt={movie.title}
              />
            </Link>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <div className="movie-rating">
                <span>⭐ {movie.vote_average.toFixed(1)}</span>
              </div>
              <button 
                onClick={() => removeFromWatchlist(movie.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist; 