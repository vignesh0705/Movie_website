import React, { createContext, useState, useContext, useEffect } from 'react';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('watchlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    const isInWatchlist = watchlist.some(item => item.id === movie.id);
    
    if (!isInWatchlist) {
      setWatchlist([...watchlist, movie]);
      return true; 
    }
    return false; 
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter(item => item.id !== movieId));
  };

  return (
    <WatchlistContext.Provider value={{ 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist,
      watchlistCount: watchlist.length 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

export const useWatchlistContext = () =>useWatchlistContext(WatchlistContext);