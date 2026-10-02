import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Award,
  BookHeart,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Globe,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users,
} from 'lucide-react';

const stats = [
  { value: '70+', label: 'Years of Excellence' },
  { value: '50K+', label: 'Alumni Worldwide' },
  { value: '95%', label: 'University Success Rate' },
  { value: '12', label: 'Science Olympiads Awards' },
];

const milestones = [
  { year: '1952', title: 'Founded as a center for scientific education.' },
  { year: '1980s', title: 'Expansion of science laboratories and academic programs.' },
  { year: '1994', title: 'School rebuilt and reopened after the crisis.' },
  { year: '2000s', title: 'Modern IT infrastructure and smart classrooms added.' },
  { year: '2010s', title: 'Top national rankings in science examinations.' },
  { year: '2020s', title: 'Continued modernization and digital learning.' },
];

const values = [
  { icon: Star, title: 'Patriotism', text: 'Accountability and love for our nation.' },
  { icon: CheckCircle2, title: 'Smartness', text: 'Safety and hardworking in all endeavors.' },
  { icon: HeartHandshake, title: 'Simplicity', text: 'Love of God and neighbor.' },
  { icon: Users, title: 'Family Spirit', text: 'Presence in the way of Mary.' },
];

const services = [
  { icon: ShieldCheck, title: 'Catholic Day School', text: 'Catholic Marist formation through science, humanities, and moral discipline.' },
  { icon: ShieldCheck, title: 'Health Services', text: 'Full-time nurse and medical care' },
  { icon: Utensils, title: 'Nutrition', text: 'Full-time canteen and healthy meals' },
  { icon: Sparkles, title: 'Science & Technology', text: 'State-of-the-art labs' },
  { icon: Award, title: 'Sport & Leisure', text: 'Sports fields, entertainment' },
  { icon: BriefcaseBusiness, title: 'Personal Development', text: 'Clubs, volunteering, talent programs' },
  { icon: Globe, title: 'Language Proficiency', text: 'English language environment' },
  { icon: Landmark, title: 'Patriotism & Citizenship', text: 'Itorero & Umuganda participation' },
];

const leadershipTeam = [
  {
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600',
    name: 'Brother Principal',
    role: 'Headmaster & Legal Representative',
    description: 'Guiding spiritual growth, academic rigor, and school vision.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600',
    name: 'Dean of Academics',
    role: 'Director of Studies & Curriculum',
    description: 'Overseeing STEM curriculum, national exams, and faculty performance.',
  },
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    name: 'School Administrator',
    role: 'Chief Financial Officer & Operations',
    description: 'Managing campus infrastructure, finance, and welfare.',
  },
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600',
    name: 'Student Leadership Guild',
    role: 'Head Boy & Head Girl (2026)',
    description: 'Representing student voices, discipline, and peer leadership.',
  },
];

const teamBanners = [
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000',
    tag: 'Teaching Faculty',
    title: 'Our Science & Humanities Teachers',
    description:
      "A team of over 35+ qualified educators, laboratory technicians, and ICT instructors committed to nurturing Rwanda's next generation of scientists.",
  },
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000',
    tag: 'Student Council',
    title: 'Student Leadership Body',
    description:
      'Elected student leaders fostering discipline, organizing extracurricular clubs, and coordinating community service initiatives.',
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page-shell">
      <style>{`
        .about-page-shell {
          background: linear-gradient(180deg, #f5f9ff 0%, #eef5ff 100%);
          color: #0f172a;
          font-family: var(--font-body);
        }

        .about-page-shell * {
          box-sizing: border-box;
        }

        .about-page-shell img {
          max-width: 100%;
          display: block;
        }

        .about-page-shell a {
          text-decoration: none;
        }

        .about-page-shell h1,
        .about-page-shell h2,
        .about-page-shell h3,
        .about-page-shell h4 {
          margin: 0;
          font-family: var(--font-heading);
          color: #0f172a;
          line-height: 1.12;
        }

        .about-page-shell p {
          margin: 0;
          line-height: 1.75;
        }

        .about-section-shell {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .about-hero {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(90deg, rgba(8, 20, 42, 0.8), rgba(17, 42, 78, 0.6)),
            url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600') center/cover no-repeat;
        }

        .about-hero-content {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          min-height: 570px;
          padding: 9rem 0 5rem;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.6rem 1rem;
          border-radius: 999px;
          font-size: 0.72rem;
          line-height: 1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 800;
          background: rgba(37, 99, 235, 0.12);
          border: 1px solid rgba(96, 165, 250, 0.45);
          color: #dbeafe;
        }

        .about-hero h1 {
          margin-top: 1.4rem;
          max-width: 760px;
          font-size: clamp(2.7rem, 5vw, 4.8rem);
          color: #ffffff;
          letter-spacing: -0.05em;
        }

        .about-hero p {
          max-width: 760px;
          margin-top: 1rem;
          color: rgba(255, 255, 255, 0.86);
          font-size: 1.08rem;
        }

        .about-stats {
          position: relative;
          z-index: 2;
          margin-top: -42px;
          margin-bottom: 2.6rem;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .about-stat {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.1rem;
          padding: 1.25rem 1rem;
          text-align: center;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);
        }

        .about-stat strong {
          display: block;
          font-size: clamp(1.7rem, 2.5vw, 2.5rem);
          color: #1e56a0;
          font-family: var(--font-heading);
        }

        .about-stat span {
          display: block;
          margin-top: 0.4rem;
          color: #475569;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .about-section {
          padding: 4.5rem 0;
        }

        .about-story-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.1fr;
          gap: 2rem;
        }

        .about-story-copy {
          padding: 1rem 0;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          background: rgba(30, 86, 160, 0.08);
          border: 1px solid rgba(30, 86, 160, 0.12);
          color: #1e56a0;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .about-story-copy h2,
        .about-principal-copy h2,
        .about-values-header h2,
        .about-services-header h2 {
          margin-top: 1rem;
          font-size: clamp(2rem, 3vw, 2.9rem);
          color: #0f172a;
        }

        .about-story-copy p,
        .about-principal-copy p,
        .about-values-header p,
        .about-services-header p {
          margin-top: 1rem;
          color: #475569;
          font-size: 1rem;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .timeline-item {
          position: relative;
          padding: 1.2rem 1rem 1rem 1.15rem;
          border-radius: 1.1rem;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(30, 86, 160, 0.12);
          box-shadow: 0 16px 28px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease-out;
        }

        .timeline-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 36px rgba(30, 86, 160, 0.12);
          border-color: rgba(30, 86, 160, 0.5);
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          left: 1rem;
          top: 1rem;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.22);
        }

        .timeline-item .year {
          display: block;
          padding-left: 1.7rem;
          color: #1e56a0;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .timeline-item h3 {
          margin-top: 0.8rem;
          padding-left: 1.7rem;
          font-size: 1.02rem;
          color: #0f172a;
        }

        .about-principal-card {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 1.6rem;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.6rem;
          padding: 1.4rem;
          box-shadow: 0 24px 40px rgba(15, 23, 42, 0.08);
        }

        .principal-portrait {
          position: relative;
          overflow: hidden;
          border-radius: 1.3rem;
          min-height: 380px;
        }

        .principal-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .principal-meta {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.9rem;
          padding: 0.8rem 0.9rem;
        }

        .principal-meta h3 {
          color: #ffffff;
          font-size: 1.08rem;
          margin-bottom: 0.2rem;
        }

        .principal-meta p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .about-principal-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-principal-copy h2 {
          font-size: clamp(2rem, 3vw, 2.7rem);
        }

        .quote-block {
          margin-top: 1.2rem;
          padding: 1rem 1.1rem;
          border-left: 4px solid #2563eb;
          background: rgba(37, 99, 235, 0.08);
          border-radius: 0.9rem;
          color: #1e293b;
          font-weight: 600;
        }

        .about-mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .about-mission-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.2rem;
          padding: 1.5rem;
          box-shadow: 0 18px 30px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease-out;
        }

        .about-mission-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 36px rgba(30, 86, 160, 0.12);
          border-color: rgba(30, 86, 160, 0.5);
        }

        .about-mission-card h3 {
          color: #1e56a0;
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
        }

        .about-golden-rule {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 94px;
          padding: 1rem 1.4rem;
          border-radius: 1.2rem;
          background: linear-gradient(135deg, rgba(18, 59, 115, 1), rgba(30, 86, 160, 1));
          color: #ffffff;
          text-align: center;
          font-size: clamp(1.05rem, 2vw, 1.5rem);
          font-weight: 700;
          box-shadow: 0 20px 35px rgba(18, 59, 115, 0.2);
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.1rem;
          margin-top: 2rem;
        }

        .about-value-card {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.2rem;
          padding: 1.5rem 1.1rem;
          text-align: center;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .about-value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 38px rgba(30, 86, 160, 0.12);
          border-color: rgba(30, 86, 160, 0.6);
        }

        .about-value-icon {
          width: 3.2rem;
          height: 3.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(30, 86, 160, 0.08);
          border-radius: 0.9rem;
          margin-bottom: 0.9rem;
          color: #1e56a0;
        }

        .about-value-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: #0f172a;
        }

        .about-value-card p {
          color: #475569;
          font-size: 0.9rem;
        }

        .about-services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .about-service-card {
          background: linear-gradient(180deg, rgba(30, 86, 160, 1), rgba(18, 59, 115, 1));
          color: #ffffff;
          border-radius: 1.1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.3rem 1rem;
          transition: all 0.3s ease-out;
        }

        .about-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 40px rgba(30, 86, 160, 0.24);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .about-service-icon {
          width: 2.8rem;
          height: 2.8rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.8rem;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 0.8rem;
        }

        .about-service-card h3 {
          color: #ffffff;
          font-size: 1.07rem;
          margin-bottom: 0.4rem;
        }

        .about-service-card p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.82rem;
        }

        .leadership-team-section {
          padding: 4.5rem 0;
          background: linear-gradient(180deg, #f5f9ff 0%, #ffffff 100%);
        }

        .leadership-team-header {
          max-width: 780px;
          margin: 0 auto 2.2rem;
          text-align: center;
        }

        .leadership-team-header h2 {
          margin-top: 1rem;
          font-size: clamp(2rem, 3vw, 2.9rem);
          color: #0f172a;
        }

        .leadership-team-header p {
          margin-top: 0.9rem;
          color: #475569;
          font-size: 1rem;
        }

        .leadership-team-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .leadership-person-card {
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(30, 86, 160, 0.14);
          border-radius: 1rem;
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease-out;
        }

        .leadership-person-card:hover {
          transform: translateY(-8px);
          border-color: #1e56a0;
          box-shadow: 0 24px 40px rgba(15, 23, 42, 0.14);
        }

        .leadership-person-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .leadership-person-copy {
          padding: 1.2rem 1.1rem 1.35rem;
        }

        .leadership-person-copy h3 {
          margin: 0;
          color: #0f172a;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          line-height: 1.25;
        }

        .leadership-person-role {
          margin-top: 0.45rem;
          color: #1e56a0;
          font-size: 0.78rem;
          font-weight: 800;
          line-height: 1.5;
        }

        .leadership-person-description {
          margin-top: 0.7rem;
          color: #475569;
          font-size: 0.88rem;
          line-height: 1.65;
        }

        .leadership-banners-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .leadership-banner {
          position: relative;
          min-height: 340px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          border-radius: 1rem;
          background: #0f172a;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.12);
        }

        .leadership-banner::after {
          position: absolute;
          inset: 0;
          content: '';
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.04) 15%, rgba(15, 23, 42, 0.88) 100%);
        }

        .leadership-banner-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .leadership-banner:hover .leadership-banner-image {
          transform: scale(1.04);
        }

        .leadership-banner-copy {
          position: relative;
          z-index: 1;
          padding: 1.6rem;
          color: #ffffff;
        }

        .leadership-banner-tag {
          display: inline-flex;
          padding: 0.45rem 0.75rem;
          border-radius: 999px;
          background: #1e56a0;
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .leadership-banner-copy h3 {
          margin: 0.9rem 0 0;
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          line-height: 1.2;
        }

        .leadership-banner-copy p {
          margin-top: 0.65rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        @media (max-width: 980px) {
          .about-story-grid,
          .about-principal-card,
          .about-services-grid,
          .about-values-grid {
            grid-template-columns: 1fr 1fr;
          }

          .about-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .leadership-team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .about-hero {
            min-height: 500px;
          }

          .about-story-grid,
          .about-principal-card,
          .about-values-grid,
          .about-mission-grid,
          .about-services-grid,
          .about-stats-grid,
          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .leadership-team-grid,
          .leadership-banners-grid {
            grid-template-columns: 1fr;
          }

          .leadership-banner {
            min-height: 320px;
          }

          .about-hero-content {
            padding-top: 9rem;
            padding-bottom: 4rem;
          }

          .about-section {
            padding: 3.5rem 0;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-badge">
            <Star size={16} />
            <span>Catholic Marist Day School</span>
          </div>

          <h1>70+ Years of Catholic Marist Education</h1>

          <p>
            Established in 1952, G.S. Busogo I - Saint Benoît is a Catholic Marist Day School committed to science,
            humanities, and moral discipline.
          </p>

        </div>
      </section>

      <div className="about-stats">
        <div className="about-stats-grid">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="about-section" id="story">
        <div className="about-section-shell">
          <div className="about-story-grid">
            <div className="about-story-copy">
              <span className="section-kicker">Our Story</span>
              <h2>Faith, growth, and a long tradition of learning</h2>
              <p>
                Founded by visionary educational leaders, our school began as a place where young people could grow in
                faith, discipline, and intellectual curiosity. Over the decades, it has expanded through a steadfast
                commitment to high-quality secondary education and the formation of responsible citizens.
              </p>
              <p>
                Today, G.S. Busogo I is a Catholic Marist Day School shaped by faith, science, humanities, and moral
                discipline. We prepare students for academic achievement and service to Rwanda and the wider world.
              </p>
            </div>

            <div className="timeline-grid">
              {milestones.map((item) => (
                <div className="timeline-item" key={item.year}>
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="principal-message">
        <div className="about-section-shell">
          <div className="about-principal-card">
            <div className="principal-portrait">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800"
                alt="School principal"
              />
              <div className="principal-meta">
                <h3>Bro. INGABIRE Jean Marie Vianney</h3>
                <p>Principal</p>
              </div>
            </div>

            <div className="about-principal-copy">
              <span className="section-kicker">Principal's Message</span>
              <h2>{t('school.mottoHeading')}: {t('school.motto')}</h2>
              <p>
                At G.S. Busogo I, we believe that true education goes beyond intellectual performance. It must also form the
                heart, strengthen moral character, and awaken a sense of responsibility toward God, others, and the nation.
              </p>
              <div className="quote-block">
                {t('school.mottoReflection')}
              </div>
              <p>
                This is why we invest in disciplined learning, spiritual formation, and practical skills that prepare young
                people to serve their communities with wisdom, courage, and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="mission-vision">
        <div className="about-section-shell">
          <div className="about-mission-grid">
            <div className="about-mission-card">
              <h3>{t('school.missionHeading')}</h3>
              <p>{t('school.mission')}</p>
            </div>

            <div className="about-mission-card">
              <h3>{t('school.visionHeading')}</h3>
              <p>{t('school.vision')}</p>
            </div>
          </div>

          <div className="about-golden-rule">
            Be at the Right Place at the Right Time doing the Right Thing with the Right Person.
          </div>
        </div>
      </section>

      <section className="about-section" id="values">
        <div className="about-section-shell">
          <div className="about-values-header">
            <span className="section-kicker">What We Stand For</span>
            <h2>Values that shape our learners</h2>
          </div>

          <div className="about-values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="about-value-card" key={title}>
                <div className="about-value-icon">
                  <Icon size={28} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="services">
        <div className="about-section-shell">
          <div className="about-services-header">
            <span className="section-kicker">Our Offerings</span>
            <h2>What do we offer?</h2>
          </div>

          <div className="about-services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <div className="about-service-card" key={title}>
                <div className="about-service-icon">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leadership-team-section" id="school-leadership">
        <div className="about-section-shell">
          <header className="leadership-team-header">
            <span className="section-kicker">Our Team & Leadership</span>
            <h2>Guided by Experienced Leaders & Dedicated Educators</h2>
            <p>
              Meet the administration, faculty, and student representatives dedicated to academic excellence and Saint
              Benoît values at G.S. Busogo I.
            </p>
          </header>

          <div className="leadership-team-grid">
            {leadershipTeam.map((member) => (
              <article className="leadership-person-card" key={member.name}>
                <img className="leadership-person-image" src={member.image} alt={member.name} />
                <div className="leadership-person-copy">
                  <h3>{member.name}</h3>
                  <p className="leadership-person-role">{member.role}</p>
                  <p className="leadership-person-description">{member.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="leadership-banners-grid">
            {teamBanners.map((banner) => (
              <article className="leadership-banner" key={banner.tag}>
                <img className="leadership-banner-image" src={banner.image} alt={banner.title} />
                <div className="leadership-banner-copy">
                  <span className="leadership-banner-tag">{banner.tag}</span>
                  <h3>{banner.title}</h3>
                  <p>{banner.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}