import React from 'react';
//import Navbar from 'Navbar';
//import EventListing from 'EventListing';
import './index.css'; // Ensure this path is correct
import EventListing from './Component/EventListing';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <EventListing />
    </div>
  );
};

export default App;