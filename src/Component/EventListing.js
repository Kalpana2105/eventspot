import React, { useState, useEffect } from 'react';
import { events } from '../mockData';
import EventDetailsModal from './EventDetailsModal';

const EventListing = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredEvents, setFilteredEvents] = useState(events); // State for filtered events

  useEffect(() => {
    // Simulating data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate 1 second loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter events based on the search query
    const results = events.filter(event => 
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(results);
  }, [searchQuery]); // Re-run when searchQuery changes

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div>
      <div className="search-container">
        <input 
          className="search-input"
          type="text" 
          placeholder="Search events by name or location..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
      </div>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
            <h3>{event.name}</h3>
            <div className="event-info">
              <i className="far fa-calendar"></i>
              <span>{event.date}</span>
            </div>
            <div className="event-info">
              <i className="fas fa-map-marker-alt"></i>
              <span>{event.location}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EventListing;