import React from 'react';
import { Cross, Bed, ActivitySquare } from 'lucide-react';
import './FirstAidCards.css';

export default function FirstAidCards() {
  const cards = [
    {
      icon: <Cross className="first-aid-icon" />,
      title: "Perawatan Luka Terbuka",
      listType: "ordered",
      points: [
        "Hentikan perdarahan dengan menekan luka.",
        "Bersihkan luka menggunakan air bersih.",
        "Tutup luka dengan kasa atau perban steril.",
        "Jangan lepaskan balutan pertama jika masih berdarah.",
        "Segera ke fasilitas kesehatan bila perdarahan tidak berhenti atau luka berat."
      ]
    },
    {
      icon: <Bed className="first-aid-icon" />,
      title: "Penanganan Pingsan",
      listType: "ordered",
      points: [
        "Baringkan pasien pada tempat yang relatif teduh dan nyaman.",
        "Posisikan pemulihan (Recovery Position).",
        "Selalu perhatikan tingkat kesadaran dan pernapasan pasien."
      ],
      warning: <><strong className="callout-title">Catatan Penting:</strong> Pasien pingsan biasanya akan bangun dan pulih dalam waktu singkat. Jika lebih dari 5 menit pasien belum bangun, asumsikan sebagai gangguan medis yang lebih berat. Bawa pasien ke rumah sakit.</>
    },
    {
      icon: <ActivitySquare className="first-aid-icon" />,
      title: "Penanganan Patah Tulang",
      listType: "unordered",
      points: [
        <><strong key="t">Tanda & Gejala:</strong> Bentuk berubah, nyeri dan kaku pada area patah, bengkak dan memar, gangguan fungsi gerak, serta terdengar suara berderik (krepitasi).</>,
        <><strong key="a">Tindakan:</strong> Lakukan pembidaian untuk mengimobilisasi dan menstabilkan bagian yang cedera.</>
      ]
    }
  ];

  return (
    <section id="p3k" className="first-aid-section bg-odd">
      <div className="container">
        <h2 className="section-title text-center first-aid-main-title">Dasar Pertolongan Pertama (P3K)</h2>
        
        <div className="first-aid-intro">
          <p>
            <strong>Pertolongan Pertama</strong> adalah pemberian pertolongan segera kepada penderita sakit atau cedera atau kecelakaan yang memerlukan penanganan medis dasar sebelum bantuan profesional datang.
          </p>
        </div>

        <div className="first-aid-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="first-aid-card">
              <div className="first-aid-card-header">
                <div className="first-aid-icon-wrapper">
                  {card.icon}
                </div>
                <h4 className="first-aid-title">{card.title}</h4>
              </div>
              
              {card.listType === "ordered" ? (
                <ol className="first-aid-list ordered-list">
                  {card.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ol>
              ) : (
                <ul className="first-aid-list">
                  {card.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              )}

              {card.warning && (
                <div className="first-aid-warning">
                  {card.warning}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
