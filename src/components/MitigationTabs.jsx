import React, { useState } from 'react';
import { Mountain, Activity, Home, Bed, Car, Compass } from 'lucide-react';
import './MitigationTabs.css';

export default function MitigationTabs() {
  const [activeTab, setActiveTab] = useState('longsor');

  return (
    <section id="mitigasi" className="mitigation-section bg-odd">
      <div className="container">
        <h2 className="section-title text-center mitigation-main-title">Panduan Mitigasi & Evakuasi</h2>
        
        <div className="mitigation-intro-box">
          <p className="intro-definition">
            <strong>Mitigasi:</strong> Seluruh upaya yang dilakukan sebelum bencana terjadi dengan tujuan mengurangi risiko, kerugian materiil, dan dampak buruk terhadap kehidupan warga.
          </p>
          <ol className="intro-list">
            <li>Mengenali daerah rawan dan bahaya, serta zona aman.</li>
            <li>Membuat jalur evakuasi ke titik kumpul yang aman.</li>
            <li>Menjaga keseimbangan alam dan ekosistem yang ada.</li>
            <li>Menyiapkan tas siaga untuk kebutuhan darurat.</li>
          </ol>
        </div>

        <div className="tabs-container">
          <div className="tab-headers">
            <button 
              className={`tab-btn ${activeTab === 'longsor' ? 'active' : ''}`}
              onClick={() => setActiveTab('longsor')}
            >
              <Mountain className="tab-icon" />
              Tanah Longsor
            </button>
            <button 
              className={`tab-btn ${activeTab === 'gempa' ? 'active' : ''}`}
              onClick={() => setActiveTab('gempa')}
            >
              <Activity className="tab-icon" />
              Gempa Bumi
            </button>
          </div>

          <div className="tab-content-wrapper">
            {activeTab === 'longsor' && (
              <div className="tab-content animate-fade-in">
                <p className="tab-definition">
                  <strong>Tanah longsor</strong> adalah peristiwa perpindahan massa tanah atau batuan dari tempat yang tinggi menuju tempat yang lebih rendah akibat hilangnya kestabilan penopang tanah.
                </p>
                
                <div className="content-grid">
                  <div className="content-box">
                    <h4 className="content-title">Tanda-tanda</h4>
                    <ul className="bullet-list">
                      <li>Retakan tanah.</li>
                      <li>Pohon miring.</li>
                      <li>Dinding retak.</li>
                    </ul>
                  </div>
                  
                  <div className="content-box action-box">
                    <h4 className="content-title">Tindakan Mitigasi Saat Kejadian</h4>
                    <ol className="action-list">
                      <li>Segera evakuasi diri.</li>
                      <li>Amankan arah lari.</li>
                      <li>Jangan fokus pada harta benda.</li>
                      <li>Patuhi arahan petugas.</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gempa' && (
              <div className="tab-content animate-fade-in">
                <p className="tab-definition">
                  <strong>Gempa bumi</strong> adalah getaran atau guncangan hebat di permukaan bumi yang disebabkan oleh pelepasan energi akibat pergeseran mendadak lempeng tektonik bumi.
                </p>

                <h4 className="content-title text-center" style={{marginTop: '2rem'}}>Tindakan Darurat Utama</h4>
                <div className="drop-cover-hold">
                  <div className="dch-card">
                    <h5>1. MENUNDUK (DROP!)</h5>
                    <p>Turunkan posisi tubuh agar tidak terjatuh.</p>
                  </div>
                  <div className="dch-card">
                    <h5>2. BERLINDUNG (COVER!)</h5>
                    <p>Lindungi kepala dan leher, berlindung di bawah perabot yang kuat.</p>
                  </div>
                  <div className="dch-card">
                    <h5>3. BERPEGANGAN (HOLD ON!)</h5>
                    <p>Berpegangan erat pada tempat berlindung hingga guncangan berhenti.</p>
                  </div>
                </div>

                <h4 className="content-title" style={{marginTop: '2rem'}}>Tindakan Berdasarkan Situasi Spesifik</h4>
                <div className="specific-situations-grid">
                  <div className="specific-card">
                    <Bed className="specific-icon" />
                    <div>
                      <h6>Di Tempat Tidur</h6>
                      <p>Tetap di sana, berpegangan, dan lindungi kepala dengan bantal.</p>
                    </div>
                  </div>
                  <div className="specific-card">
                    <Home className="specific-icon" />
                    <div>
                      <h6>Di Luar Ruangan</h6>
                      <p>Jauhi bangunan, tembok, dan tiang listrik.</p>
                    </div>
                  </div>
                  <div className="specific-card">
                    <Car className="specific-icon" />
                    <div>
                      <h6>Saat Berkendara</h6>
                      <p>Berhenti di tempat yang aman, nyalakan lampu hazard, dan tetap di kendaraan.</p>
                    </div>
                  </div>
                  <div className="specific-card">
                    <Activity className="specific-icon" />
                    <div>
                      <h6>Menggunakan Kursi Roda</h6>
                      <p>Kunci rem di tempat yang aman dan lindungi kepala.</p>
                    </div>
                  </div>
                  <div className="specific-card">
                    <Compass className="specific-icon" />
                    <div>
                      <h6>Di Mana Saja</h6>
                      <p>Menunduk, lindungi kepala, dan tetap di posisi tersebut sampai guncangan berhenti.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
