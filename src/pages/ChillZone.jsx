import React from 'react';

// This component is for the Chill Zone.
function ChillZone({ navigate }) {

  // State would be used here to manage the media player, playlist, chat, etc.

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('dashboard')} style={{ cursor: 'pointer' }}>
            <h2>Hackifyy</h2>
          </div>
          <div className="nav-breadcrumb">
            <span>Chill Zone</span>
          </div>
        </div>
      </nav>

      <div className="zone-container">
        <div className="zone-header">
          <div className="zone-icon-large chill">
            <i className="fas fa-music"></i>
          </div>
          <h1>Chill Zone</h1>
          <p>Relaxed environment for socializing with synchronized media experiences</p>
        </div>

        {/* Feature list */}
        <div className="zone-features-grid">
           <div className="feature-item">
                <i className="fas fa-sync-alt"></i>
                <div>
                    <h4>Synchronized Media</h4>
                    <p>Play music and videos that all participants experience together</p>
                </div>
            </div>
             <div className="feature-item">
                <i className="fas fa-comments"></i>
                <div>
                    <h4>Social Chat</h4>
                    <p>Text and voice chat for casual conversations</p>
                </div>
            </div>
             {/* Add other features here */}
        </div>


        <div className="zone-actions">
          <button className="btn-primary btn-large">
            <i className="fas fa-plus"></i>
            Create Chill Zone
          </button>
          <button className="btn-secondary btn-large">
            <i className="fas fa-sign-in-alt"></i>
            Join Chill Zone
          </button>
        </div>

        {/* The media player, playlist, and chat interface
            would be conditionally rendered here based on state. */}
      </div>
    </>
  );
}

export default ChillZone;
