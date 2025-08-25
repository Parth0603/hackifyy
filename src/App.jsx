import React, { useState, useEffect } from "react";

// --- THE CRITICAL FIX ---
// This import path is now correct. It points to the main LandingPage component
// inside the `/LandingPage/` directory, which is responsible for assembling
// all the individual sections (Hero, Stats, Solution, etc.).
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import CursorFollower from "./components/CursorFollower.jsx";
import MagneticElements from "./components/MagneticElements.jsx"; 

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import TeachingZone from "./pages/TeachingZone.jsx";
import GamingZone from "./pages/GamingZone.jsx";
import EventsZone from "./pages/EventsZone.jsx";
import ChillZone from "./pages/ChillZone.jsx";
import WorkspaceZone from "./pages/WorkspaceZone.jsx";

// This component acts as the main router for your application.
function App() {
  const [page, setPage] = useState("landing");
  const [user, setUser] = useState(null);

  // Checks for a logged-in user when the app first loads.
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const userName = localStorage.getItem("userName");
    if (token && userName) {
      setUser({ name: userName });
      setPage("dashboard");
    }
  }, []);

  // Function to navigate between different pages.
  const navigate = (targetPage) => {
    setPage(targetPage);
    window.scrollTo(0, 0);
  };

  // Functions to handle user login and logout.
  const handleLogin = (userData) => {
    setUser(userData);
    navigate("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    setUser(null);
    navigate("landing");
  };

  // Renders the correct page based on the current state.
  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login navigate={navigate} onLogin={handleLogin} />;
      case "dashboard":
        return <Dashboard navigate={navigate} user={user} onLogout={handleLogout} />;
      case "teaching":
        return <TeachingZone navigate={navigate} />;
      case "gaming":
        return <GamingZone navigate={navigate} />;
      case "events":
        return <EventsZone navigate={navigate} />;
      case "chill":
        return <ChillZone navigate={navigate} />;
      case "workspace":
        return <WorkspaceZone navigate={navigate} />;
      case "about":
        return <About navigate={navigate} />;
      case "pricing":
        return <Pricing navigate={navigate} />;
      case "contact":
        return <Contact navigate={navigate} />;
      case "landing":
      default:
        // This will now render the correct LandingPage with all its sections.
        return <LandingPage navigate={navigate} />;
    }
  };

  return (
    <>
      <CursorFollower />
      <MagneticElements />
      {renderPage()}
    </>
  );
}

export default App;
