import React, { createContext, useState, useEffect } from 'react';
import { initialData } from '../data/initialData';

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [tripData, setTripData] = useState(() => {
    const saved = localStorage.getItem('belgradeTrip');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('belgradeTrip', JSON.stringify(tripData));
  }, [tripData]);

  const resetTrip = () => {
  if (window.confirm("Are you sure? This will wipe all your custom notes!")) {
    setTripData(initialData);
    localStorage.removeItem('belgradeTrip');
    window.location.reload(); // Refresh to ensure state is clean
  }
};

  return (
    <TripContext.Provider value={{ tripData, setTripData, resetTrip }}>
      {children}
    </TripContext.Provider>
  );
};