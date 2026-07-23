import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Shirt, 
  Droplet, 
  Stethoscope, 
  Radio, 
  SprayCan, 
  Flashlight
} from 'lucide-react';
import './SurvivalKitGrid.css';

export default function SurvivalKitGrid() {
  const defaultItems = {};

  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('tsb-checklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultItems;
      }
    }
    return defaultItems;
  });

  useEffect(() => {
    localStorage.setItem('tsb-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const kitCategories = [
    {
      icon: <FileText className="kit-icon" />,
      title: "Dokumen Penting",
      items: [
        { id: 'doc-1', label: "KTP & KK" },
        { id: 'doc-2', label: "Akta Kelahiran & Ijazah" },
        { id: 'doc-3', label: "Surat Kendaraan & Sertifikat (dalam plastik tahan air)" }
      ]
    },
    {
      icon: <Shirt className="kit-icon" />,
      title: "Pakaian",
      items: [
        { id: 'cloth-1', label: "Pakaian ganti & Jaket" },
        { id: 'cloth-2', label: "Selimut & Handuk" },
        { id: 'cloth-3', label: "Jas hujan" }
      ]
    },
    {
      icon: <Droplet className="kit-icon" />,
      title: "Makanan & Minuman",
      items: [
        { id: 'food-1', label: "Air minum (±3 hari)" },
        { id: 'food-2', label: "Biskuit & Mie instan" }
      ]
    },
    {
      icon: <Stethoscope className="kit-icon" />,
      title: "Kesehatan",
      items: [
        { id: 'med-1', label: "Kotak P3K" },
        { id: 'med-2', label: "Obat-obatan pribadi" }
      ]
    },
    {
      icon: <Radio className="kit-icon" />,
      title: "Komunikasi",
      items: [
        { id: 'com-1', label: "Handphone & Charger" },
        { id: 'com-2', label: "Powerbank (terisi penuh)" },
        { id: 'com-3', label: "Radio portabel & Baterai cadangan" }
      ]
    },
    {
      icon: <SprayCan className="kit-icon" />,
      title: "Perlengkapan Pribadi",
      items: [
        { id: 'per-1', label: "Sabun, Sikat & pasta gigi" },
        { id: 'per-2', label: "Tisu & Masker" }
      ]
    },
    {
      icon: <Flashlight className="kit-icon" />,
      title: "Perlengkapan Darurat",
      items: [
        { id: 'emg-1', label: "Uang tunai secukupnya" },
        { id: 'emg-2', label: "Peluit darurat" },
        { id: 'emg-3', label: "Senter/Headlamp" },
        { id: 'emg-4', label: "Korek api atau lilin" }
      ]
    }
  ];

  return (
    <section id="tas-siaga" className="tsb-section bg-even">
      <div className="container">
        <h2 className="section-title text-center">Siapkan Tas Siaga Bencana (TSB) Anda</h2>
        <p className="tsb-subtitle text-center">Centang barang yang sudah Anda masukkan ke dalam tas. Data akan tersimpan di perangkat Anda.</p>
        
        <div className="kit-grid">
          {kitCategories.map((category, index) => (
            <div key={index} className="kit-card">
              <div className="kit-card-header">
                <div className="kit-icon-wrapper">
                  {category.icon}
                </div>
                <h4 className="kit-title">{category.title}</h4>
              </div>
              <ul className="checklist">
                {category.items.map(item => (
                  <li key={item.id} className="checklist-item">
                    <label className={`checklist-label ${checkedItems[item.id] ? 'checked' : ''}`}>
                      <input 
                        type="checkbox" 
                        checked={!!checkedItems[item.id]} 
                        onChange={() => handleCheck(item.id)} 
                        className="checklist-checkbox"
                      />
                      <span className="checklist-text">{item.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
