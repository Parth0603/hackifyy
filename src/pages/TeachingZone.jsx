import React from 'react';

// This component is for the Teaching Zone.
function TeachingZone({ navigate }) {
  
  // In a real application, you would use state (useState) to manage
  // creating/joining sessions, showing modals, etc.

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('dashboard')} style={{ cursor: 'pointer' }}>
            <h2>Hackifyy</h2>
          </div>
          <div className="nav-breadcrumb">
            <span>Teaching Zone</span>
          </div>
        </div>
      </nav>

      <div className="zone-container">
        <div className="zone-header">
          <div className="zone-icon-large teaching">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <h1>Teaching Zone</h1>
          <p>Interactive classroom environment with comprehensive teaching tools</p>
        </div>

        {/* This section would list the features */}
        <div className="zone-features-grid">
          {/* Example feature item */}
          <div className="feature-item">
            <i className="fas fa-chalkboard"></i>
            <div>
              <h4>Interactive Whiteboard</h4>
              <p>Digital whiteboard for teaching with drawing tools</p>
            </div>
          </div>
           {/* You would map over a list of features here */}
        </div>


        <div className="zone-actions">
          <button className="btn-primary btn-large">
            <i className="fas fa-plus"></i>
            Create as Host (Teacher)
          </button>
          <button className="btn-secondary btn-large">
            <i className="fas fa-sign-in-alt"></i>
            Join as Student
          </button>
        </div>

        {/* The actual teaching interface, modals for joining, whiteboard, etc.
            would be conditionally rendered here based on the component's state. */}
      </div>
    </>
  );
}

export default TeachingZone;
