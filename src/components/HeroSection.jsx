import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section bg-odd">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="hero-content container text-center">
        <h1 className="hero-headline">Portal Siaga Bencana Desa Sukaluyu</h1>
        <p className="hero-subheadline">
          Kenali Ancamannya, Siapkan Dirinya, Kurangi Risikonya.
        </p>
        
        <a 
          href="https://www.bmkg.go.id/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          INFO TERKINI BMKG
        </a>
      </div>
    </section>
  );
}
