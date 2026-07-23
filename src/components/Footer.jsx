import React from 'react';
import './Footer.css';
import logoUgm from '../assets/logo_ugm.png';
import logoKkn from '../assets/logo_kkn.png';
import logoDestana from '../assets/logo_destana.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">KKN PPM Universitas Gadjah Mada</h3>
            <p className="footer-subtitle">Periode 2 Tahun 2026</p>
            <p className="footer-subtitle">Lokaraya Pangalengan</p>
          </div>

          <div className="footer-logos">
            <img src={logoUgm} alt="Logo UGM" className="footer-logo" />
            <img src={logoKkn} alt="Logo KKN" className="footer-logo" />
            <img src={logoDestana} alt="Logo Destana" className="footer-logo" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Portal Siaga Bencana Desa Sukaluyu KKN UGM. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
