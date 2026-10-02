import React, { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';

const categories = ['All', 'Academic & STEM', 'Catholic Tradition', 'Community & Day School', 'Sports & Culture'];

const stories = [
  {
    id: 1,
    category: 'Catholic Tradition',
    date: 'March 21, 2026',
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=800',
    title: 'Saint Benoît Feast Day Mass and Community Thanksgiving',
    summary:
      'Students, teachers, and local families gathered at the campus chapel for a sacred Mass celebrating Saint Benoît, reflecting on faith, discipline, and moral conscience.',
  },
  {
    id: 2,
    category: 'Academic & STEM',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800',
    title: 'Busogo I Students Win National Recognition in Science & Innovation',
    summary:
      'Our students showcased remarkable scientific research during the Rwanda National Science Fair, earning top honors in applied physics.',
  },
  {
    id: 3,
    category: 'Community & Day School',
    date: 'March 02, 2026',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800',
    title: 'Parent-Teacher Assembly Discusses Day Student Support & Academic Progress',
    summary:
      'Parents and guardians met with administration to discuss transportation, daily attendance, and collaborative home-school study schedules for day scholars.',
  },
  {
    id: 4,
    category: 'Academic & STEM',
    date: 'February 20, 2026',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    title: 'New ICT & Smart Classroom Lab Officially Inaugurated',
    summary:
      'G.S. Busogo I launched a modernized computer laboratory equipped with high-speed internet to enhance e-learning and software skills.',
  },
  {
    id: 5,
    category: 'Catholic Tradition',
    date: 'February 10, 2026',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800',
    title: 'Lenten Season Opening Mass and Youth Retreat',
    summary:
      'The school chaplain led the student body in the opening Liturgy of Ash Wednesday, starting a season of spiritual reflection and community service.',
  },
  {
    id: 6,
    category: 'Sports & Culture',
    date: 'January 28, 2026',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800',
    title: 'Inter-School Football Tournament Victory for Busogo I',
    summary:
      'The school football team claimed victory in the Musanze District Secondary Schools championship, demonstrating teamwork and athletic spirit.',
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = useMemo(() => {
    if (!stories || stories.length === 0) return [];

    return stories.filter((story) => {
      const matchesCategory = activeCategory === 'All' || story.category === activeCategory;
      const lowerQuery = searchTerm.trim().toLowerCase();
      const matchesSearch =
        lowerQuery.length === 0 ||
        story.title.toLowerCase().includes(lowerQuery) ||
        story.summary.toLowerCase().includes(lowerQuery) ||
        story.category.toLowerCase().includes(lowerQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="news-page-shell">
      <style>{`
        .news-page-shell {
          background: linear-gradient(180deg, #f5f9ff 0%, #eef6ff 100%);
          color: #0f172a;
          font-family: var(--font-body);
        }

        .news-page-shell * { box-sizing: border-box; }
        .news-page-shell img { display: block; max-width: 100%; }
        .news-page-shell a { text-decoration: none; }
        .news-page-shell h1, .news-page-shell h2, .news-page-shell h3, .news-page-shell h4 {
          margin: 0;
          font-family: var(--font-heading);
          color: #0f172a;
          line-height: 1.12;
          white-space: normal;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .news-page-shell p { margin: 0; line-height: 1.75; }

        .news-section-shell {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .news-hero {
          background: linear-gradient(90deg, rgba(10, 26, 54, 0.78), rgba(30, 86, 160, 0.78)),
            url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600') center/cover no-repeat;
          min-height: 470px;
          display: flex;
          align-items: center;
        }

        .news-hero-inner {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          padding: 9rem 0 5rem;
        }

        .news-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          color: #f8fafc;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .news-hero h1 {
          margin-top: 1.2rem;
          max-width: 760px;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          letter-spacing: -0.05em;
          color: #ffffff;
        }

        .news-hero p {
          margin-top: 1rem;
          max-width: 760px;
          color: rgba(255,255,255,0.86);
          font-size: 1.08rem;
        }

        .news-tools {
          position: relative;
          z-index: 2;
          margin-top: -28px;
          margin-bottom: 2.5rem;
        }

        .news-tools-inner {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.2rem;
          padding: 1rem 1.1rem;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);
        }

        .news-search {
          position: relative;
          flex: 1 1 280px;
        }

        .news-search input {
          width: 100%;
          height: 52px;
          border: 1px solid rgba(30, 86, 160, 0.1);
          border-radius: 999px;
          background: #f8fbff;
          color: #0f172a;
          padding: 0 1rem 0 2.8rem;
          font-size: 0.98rem;
          outline: none;
        }

        .news-search svg {
          position: absolute;
          left: 0.95rem;
          top: 50%;
          transform: translateY(-50%);
          color: #1e56a0;
        }

        .news-filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .news-filter {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(30, 86, 160, 0.12);
          background: rgba(255,255,255,0.85);
          color: #334155;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease-out;
        }

        .news-filter.active {
          background: #1e56a0;
          color: #ffffff;
          border-color: #1e56a0;
          box-shadow: 0 16px 30px rgba(30, 86, 160, 0.18);
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
          padding: 0 0 3rem;
        }

        .news-card {
          display: flex;
          flex-direction: column;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.3rem;
          overflow: hidden;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
          min-height: 100%;
        }

        .news-card:hover {
          transform: translate(-2px, -8px) translateX(1px);
          box-shadow: 0 24px 40px rgba(30, 86, 160, 0.14);
          border-color: rgba(30, 86, 160, 0.6);
        }

        .news-thumb {
          position: relative;
          overflow: hidden;
        }

        .news-thumb img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .news-card:hover .news-thumb img {
          transform: scale(1.06);
        }

        .news-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem 0.75rem;
          border-radius: 999px;
          background: rgba(30, 86, 160, 0.92);
          color: #ffffff;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .news-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 1.2rem 1rem 1.1rem;
        }

        .news-date {
          display: inline-flex;
          align-items: center;
          color: #1e56a0;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 0.7rem;
        }

        .news-card h3 {
          font-size: clamp(1.2rem, 2vw, 1.45rem);
          margin-bottom: 0.7rem;
          color: #0f172a;
        }

        .news-card p {
          color: #475569;
          margin-bottom: 1rem;
        }

        .news-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #1e56a0;
          font-weight: 800;
        }

        .news-empty {
          width: 100%;
          text-align: center;
          padding: 2rem 1rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(30, 86, 160, 0.12);
          color: #475569;
        }

        @media (max-width: 980px) {
          .news-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .news-grid {
            grid-template-columns: 1fr;
          }

          .news-hero {
            min-height: 420px;
          }
        }
      `}</style>

      <section className="news-hero">
        <div className="news-hero-inner">
          <span className="news-badge">News & Announcements</span>
          <h1>School Life, Achievements & Milestones</h1>
          <p>
            Stay connected with the latest academic accomplishments, Catholic Saint Benoît feast celebrations, STEM
            innovation fairs, and community events from G.S. Busogo I.
          </p>
        </div>
      </section>

      <div className="news-tools">
        <div className="news-tools-inner">
          <div className="news-search">
            <Search size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search news & events..."
              aria-label="Search news and events"
            />
          </div>

          <div className="news-filter-bar">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`news-filter ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="news-section-shell">
        <div className="news-grid">
          {filteredStories.length > 0 ? (
            filteredStories.map(({ id, category, date, image, title, summary }) => (
              <article className="news-card" key={id}>
                <div className="news-thumb">
                  <img src={image} alt={title} />
                  <span className="news-tag">{category}</span>
                </div>

                <div className="news-body">
                  <span className="news-date">{date}</span>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <a href="#" className="news-link">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="news-empty">No news matches your search or category at the moment.</div>
          )}
        </div>
      </section>
    </div>
  );
}
