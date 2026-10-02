import React, { useMemo, useState } from 'react';
import {
  Building2,
  Cpu,
  FlaskConical,
  LibraryBig,
  MonitorSmartphone,
  Sparkles,
} from 'lucide-react';

const quickStats = [
  { value: '6', label: 'Facilities' },
  { value: '25', label: 'Acres' },
  { value: '800+', label: 'Students' },
  { value: '6', label: 'Science Labs' },
  { value: '50+', label: 'Classrooms' },
  { value: '24/7', label: 'Library Access' },
  { value: '100%', label: 'WiFi Coverage' },
];

const facilityCards = [
  {
    title: 'Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800',
    description: 'A spacious library housing thousands of books, journals, and digital resources for research and study.',
    icon: LibraryBig,
  },
  {
    title: 'Computer Labs',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    description: 'Modern computer labs equipped with the latest hardware and high-speed internet for digital learning.',
    icon: Cpu,
  },
  {
    title: 'Science Laboratories',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800',
    description: 'State-of-the-art physics, chemistry, and biology labs for hands-on experimental learning.',
    icon: FlaskConical,
  },
  {
    title: 'Smart Classrooms',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800',
    description: 'Interactive classrooms with projectors, smart boards, and multimedia learning tools.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Champagnat Hall',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
    description: 'A multi-purpose assembly hall for school events, performances, and community gatherings.',
    icon: Building2,
  },
  {
    title: 'Campus Environment',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800',
    description: "Beautiful green grounds nestled in Rwanda's hills, providing an inspiring learning environment.",
    icon: Sparkles,
  },
];

const galleryItems = [
  { title: 'School Compound', category: 'Campus', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600' },
  { title: 'Campus Life', category: 'Student Life', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600' },
  { title: 'Academic Building', category: 'Campus', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600' },
  { title: 'Sports Activities', category: 'Student Life', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600' },
  { title: 'Learning Spaces', category: 'Facilities', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600' },
  { title: 'Campus Greenery', category: 'Campus', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600' },
  { title: 'Science Lab', category: 'Facilities', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800' },
  { title: 'Students in Study', category: 'Student Life', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600' },
  { title: 'Library Corner', category: 'Facilities', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600' },
  { title: 'Smart Classroom', category: 'Facilities', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600' },
  { title: 'School Events', category: 'Student Life', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600' },
  { title: 'Campus View', category: 'Campus', image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=600' },
  { title: 'Lecture Hall', category: 'Campus', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600' },
  { title: 'Tech Learning', category: 'Facilities', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600' },
  { title: 'Community Spirit', category: 'Student Life', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600' },
];

const filters = ['All Images', 'Campus', 'Facilities', 'Student Life'];

export default function FacilitiesPage() {
  const [activeFilter, setActiveFilter] = useState('All Images');

  const filteredGallery = useMemo(() => {
    if (!galleryItems || galleryItems.length === 0) return [];
    if (activeFilter === 'All Images') return galleryItems;
    return galleryItems.filter((item) => item?.category === activeFilter);
  }, [activeFilter]);

  if (!facilityCards || facilityCards.length === 0) {
    return <div className="campus-page-shell">Campus content unavailable.</div>;
  }

  return (
    <div className="campus-page-shell">
      <style>{`
        .campus-page-shell {
          background: linear-gradient(180deg, #f5f9ff 0%, #eef6ff 100%);
          color: #0f172a;
          font-family: var(--font-body);
        }

        .campus-page-shell * { box-sizing: border-box; }
        .campus-page-shell a { text-decoration: none; }
        .campus-page-shell img { display: block; max-width: 100%; }
        .campus-page-shell h1, .campus-page-shell h2, .campus-page-shell h3, .campus-page-shell h4 {
          margin: 0;
          font-family: var(--font-heading);
          color: #0f172a;
          line-height: 1.12;
        }
        .campus-page-shell p { margin: 0; line-height: 1.75; }

        .campus-section-shell {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .campus-hero {
          position: relative;
          background: linear-gradient(90deg, rgba(9, 23, 46, 0.82), rgba(30, 86, 160, 0.72)),
            url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600') center/cover no-repeat;
          min-height: 560px;
          display: flex;
          align-items: center;
        }

        .campus-hero-inner {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: 9rem 0 5.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .campus-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          width: fit-content;
          padding: 0.6rem 1rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #f8fafc;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .campus-hero h1 {
          margin-top: 1.2rem;
          max-width: 760px;
          font-size: clamp(2.7rem, 5vw, 4.7rem);
          letter-spacing: -0.05em;
          color: #fff;
        }

        .campus-hero p {
          margin-top: 1rem;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 1.08rem;
        }

        .campus-metrics-wrap {
          position: relative;
          z-index: 2;
          margin-top: -42px;
          margin-bottom: 2.5rem;
        }

        .campus-metrics-grid {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .campus-metric {
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1rem;
          box-shadow: 0 18px 30px rgba(15, 23, 42, 0.08);
          text-align: center;
          padding: 1rem 0.7rem;
        }

        .campus-metric strong {
          display: block;
          font-size: clamp(1.4rem, 2vw, 2rem);
          color: #1e56a0;
          font-family: var(--font-heading);
        }

        .campus-metric span {
          display: block;
          margin-top: 0.35rem;
          color: #475569;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .campus-section {
          padding: 4.5rem 0;
        }

        .campus-intro {
          margin-bottom: 2rem;
        }

        .campus-section-kicker {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          background: rgba(30, 86, 160, 0.08);
          border: 1px solid rgba(30, 86, 160, 0.12);
          color: #1e56a0;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .campus-intro h2,
        .campus-gallery-header h2 {
          margin-top: 1rem;
          font-size: clamp(2rem, 3vw, 3rem);
          color: #0f172a;
        }

        .campus-intro p,
        .campus-gallery-header p {
          margin-top: 1rem;
          color: #475569;
          max-width: 760px;
        }

        .campus-facility-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .campus-facility-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .campus-facility-card:hover,
        .campus-gallery-card:hover,
        .filter-button:hover {
          transform: translate(-2px, -8px) translateX(1px);
          box-shadow: 0 24px 40px rgba(30, 86, 160, 0.14);
          border-color: rgba(30, 86, 160, 0.6);
        }

        .campus-facility-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .campus-facility-body {
          padding: 1.2rem 1rem 1.25rem;
        }

        .campus-facility-body .facility-icon {
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.9rem;
          background: rgba(30, 86, 160, 0.08);
          color: #1e56a0;
          margin-bottom: 0.85rem;
        }

        .campus-facility-body h3 {
          font-size: 1.25rem;
          margin-bottom: 0.45rem;
        }

        .campus-facility-body p {
          color: #475569;
        }

        .campus-gallery {
          background: rgba(30, 86, 160, 0.03);
        }

        .campus-gallery-header {
          margin-bottom: 1.5rem;
        }

        .campus-filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.2rem;
        }

        .filter-button {
          padding: 0.72rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(30, 86, 160, 0.12);
          background: rgba(255,255,255,0.85);
          color: #1e293b;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease-out;
        }

        .filter-button.active {
          background: #1e56a0;
          color: #ffffff;
          border-color: #1e56a0;
          box-shadow: 0 16px 28px rgba(30, 86, 160, 0.18);
        }

        .campus-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1.8rem;
        }

        .campus-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.25rem;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
          min-height: 260px;
        }

        .campus-gallery-card img {
          width: 100%;
          height: 100%;
          min-height: 260px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .campus-gallery-card:hover img {
          transform: scale(1.08);
        }

        .campus-gallery-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(15, 23, 42, 0.72));
        }

        .gallery-caption {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          z-index: 1;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        @media (max-width: 980px) {
          .campus-facility-grid,
          .campus-gallery-grid,
          .campus-metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .campus-hero { min-height: 500px; }
          .campus-facility-grid,
          .campus-gallery-grid,
          .campus-metrics-grid {
            grid-template-columns: 1fr;
          }
          .campus-section { padding: 3.5rem 0; }
        }
      `}</style>

      <section className="campus-hero">
        <div className="campus-hero-inner">
          <div className="campus-badge">Campus & Facilities</div>
          <h1>World-Class Learning Environment</h1>
          <p>
            Experience our modern campus designed to inspire excellence, nestled in the beautiful hills of Rwanda with
            state-of-the-art facilities.
          </p>
        </div>
      </section>

      <div className="campus-metrics-wrap">
        <div className="campus-metrics-grid">
          {quickStats.map((item) => (
            <div className="campus-metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="campus-section">
        <div className="campus-section-shell">
          <div className="campus-intro">
            <span className="campus-section-kicker">Our Campus</span>
            <h2>Modern Facilities</h2>
            <p>Our campus is designed to provide students with the best possible learning environment.</p>
          </div>

          <div className="campus-facility-grid">
            {facilityCards.map(({ title, image, description, icon: Icon }) => (
              <div className="campus-facility-card transition-all duration-300 ease-out hover:-translate-y-2 hover:translate-x-1 hover:shadow-xl hover:border-[#1E56A0]" key={title}>
                <img src={image} alt={title} />
                <div className="campus-facility-body">
                  <div className="facility-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="campus-section campus-gallery">
        <div className="campus-section-shell">
          <div className="campus-gallery-header">
            <span className="campus-section-kicker">Gallery</span>
            <h2>Campus Photo Gallery</h2>
            <p>Explore our beautiful campus through these images.</p>
          </div>

          <div className="campus-filter-bar" aria-label="Gallery filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="campus-gallery-grid">
            {filteredGallery.map((item) => (
              <div className="campus-gallery-card transition-all duration-300 ease-out hover:-translate-y-2 hover:translate-x-1 hover:shadow-xl hover:border-[#1E56A0]" key={`${item.title}-${item.image}`}>
                <img src={item.image} alt={item.title} />
                <div className="gallery-caption">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}