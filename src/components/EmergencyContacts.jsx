import React from 'react';
import { Phone, ExternalLink } from 'lucide-react';
import './EmergencyContacts.css';

export default function EmergencyContacts() {
  const contacts = [
    { name: "Layanan Darurat Terpadu", number: "112" },
    { name: "Pemadam Kebakaran", number: "113" },
    { name: "Ambulans / Medis", number: "118 / 119" },
    { name: "Kepolisian", number: "110" },
    { name: "BASARNAS (SAR)", number: "115" }
  ];

  return (
    <section id="kontak" className="emergency-section bg-even">
      <div className="container">
        <h2 className="section-title text-center emergency-title">Hubungi Bantuan Darurat</h2>
        
        <div className="contact-flex-container">
          {contacts.map((contact, idx) => (
            <a href={`tel:${contact.number.split(' / ')[0]}`} key={idx} className="contact-btn">
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon-svg" />
              </div>
              <div className="contact-info">
                <h4 className="contact-name">{contact.name}</h4>
                <span className="contact-number">{contact.number}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="reference-links">
          <h4 className="reference-title">Tautan Referensi:</h4>
          <div className="reference-actions">
            <a href="https://warning.bmkg.go.id/" target="_blank" rel="noopener noreferrer" className="ref-btn">
              Widget / Link Real-time Gempa BMKG <ExternalLink className="link-icon" />
            </a>
            <a href="https://inarisk.bnpb.go.id/" target="_blank" rel="noopener noreferrer" className="ref-btn">
              Portal Edukasi BNPB (InaRISK) <ExternalLink className="link-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
