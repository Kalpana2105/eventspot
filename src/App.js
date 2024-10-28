import React from 'react';
//import Navbar from 'Navbar';
//import EventListing from 'EventListing';
import './index.css';
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
