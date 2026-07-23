import React from 'react';
import './App.css';

// Components
import HeroSection from './components/HeroSection';
import HazardMap from './components/HazardMap';
import MitigationTabs from './components/MitigationTabs';
import SurvivalKitGrid from './components/SurvivalKitGrid';
import FirstAidCards from './components/FirstAidCards';
import EmergencyContacts from './components/EmergencyContacts';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <HazardMap />
        <MitigationTabs />
        <SurvivalKitGrid />
        <FirstAidCards />
        <EmergencyContacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
