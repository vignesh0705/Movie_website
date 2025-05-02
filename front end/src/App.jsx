import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import { WatchlistProvider } from './context/WatchlistContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Watchlist from './components/Watchlist/Watchlist';
import Favorites from './components/Favorites/Favorites';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <WatchlistProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/search" element={<Search />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
      </WatchlistProvider>
    </MovieProvider>
  );
}

export default App;
