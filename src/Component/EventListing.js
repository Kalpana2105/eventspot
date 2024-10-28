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
      <h2>Upcoming Events</h2>
      <input 
        type="text" 
        placeholder="Search by name or location..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
        style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
      />
      <div className="event-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
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