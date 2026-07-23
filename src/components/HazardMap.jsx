import React from 'react';
import './HazardMap.css';
import mapLongsor from '../assets/peta_longsor.png';
import mapGempa from '../assets/peta_gempa.png';

export default function HazardMap() {
  return (
    <section id="peta" className="hazard-section bg-even">
      <div className="container">
        <h2 className="section-title text-center">Cek Lokasi Anda: Kenali Area Rawan</h2>
        
        <div className="map-grid">
          {/* Peta Longsor */}
          <div className="map-card">
            <h3 className="map-title">Peta Kerawanan Tanah Longsor</h3>
            <div className="map-image-wrapper">
              <img 
                src={mapLongsor} 
                alt="Peta Kerawanan Tanah Longsor" 
                className="map-image" 
              />
            </div>
          </div>
          
          {/* Peta Gempa */}
          <div className="map-card">
            <h3 className="map-title">Peta Kerawanan Gempa Bumi</h3>
            <div className="map-image-wrapper">
              <img 
                src={mapGempa} 
                alt="Peta Kerawanan Gempa Bumi" 
                className="map-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
