import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../../context/WatchlistContext';
import './Navbar.css';

const Navbar = () => {
  const { watchlistCount } = useWatchlist();

  return (
    <nav className="prime-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">MovieHub</Link>
        
        <div className="nav-center-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
          <Link to="/watchlist" className="nav-link">
            Watchlist
            {/* {watchlistCount > 0 && (
              <span className="watchlist-counter">{watchlistCount}</span>
            )} */}
          </Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>

        <div className="nav-auth-buttons">
          <Link to="/login" className="nav-auth-link">Login</Link>
          <Link to="/signup" className="nav-auth-button">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;