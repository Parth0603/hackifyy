import React from 'react';

// This component is for the Events Zone.
function EventsZone({ navigate }) {

  // State would be used here to manage event creation, polls, presentations, etc.

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('dashboard')} style={{ cursor: 'pointer' }}>
            <h2>Hackifyy</h2>
          </div>
          <div className="nav-breadcrumb">
            <span>Events Zone</span>
          </div>
        </div>
      </nav>

      <div className="zone-container">
        <div className="zone-header">
          <div className="zone-icon-large events">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h1>Events Zone</h1>
          <p>Host large events with presentation tools, polls, and document sharing</p>
        </div>

        {/* Feature list */}
        <div className="zone-features-grid">
           <div className="feature-item">
                <i className="fas fa-poll"></i>
                <div>
                    <h4>Polls & Q&A</h4>
                    <p>Engage your audience with interactive polls and questions</p>
                </div>
            </div>
             <div className="feature-item">
                <i className="fas fa-file-powerpoint"></i>
                <div>
                    <h4>Presentations</h4>
                    <p>Share slides and documents with your attendees</p>
                </div>
            </div>
             {/* Add other features here */}
        </div>


        <div className="zone-actions">
          <button className="btn-primary btn-large">
            <i className="fas fa-plus"></i>
            Create New Event
          </button>
          <button className="btn-secondary btn-large">
            <i className="fas fa-sign-in-alt"></i>
            Join an Event
          </button>
        </div>

        {/* The event interface, presentation view, and management tools
            would be conditionally rendered here based on state. */}
      </div>
    </>
  );
}

export default EventsZone;
