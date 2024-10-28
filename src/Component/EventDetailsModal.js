import React from 'react';

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="back-button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', color: '#4A90E2', marginBottom: '20px' }}>
          &#8592; {/* This is the left arrow character */}
        </button>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        {event.image && <img src={event.image} alt={event.name} style={{ width: '100%', borderRadius: '5px' }} />}
      </div>
    </div>
  );
};

export default EventDetailsModal;
