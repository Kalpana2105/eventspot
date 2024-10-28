import React from 'react';

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '20px',
              top: '20px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
          <h2>{event.name}</h2>
        </div>
        
        {event.image && (
          <img 
            src={event.image} 
            alt={event.name} 
            className="modal-image"
          />
        )}
        
        <div className="event-info">
          <i className="far fa-calendar"></i>
          <span>{event.date}</span>
        </div>
        
        <div className="event-info">
          <i className="fas fa-map-marker-alt"></i>
          <span>{event.location}</span>
        </div>
        
        <p style={{ lineHeight: '1.6', color: '#666' }}>{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetailsModal;
