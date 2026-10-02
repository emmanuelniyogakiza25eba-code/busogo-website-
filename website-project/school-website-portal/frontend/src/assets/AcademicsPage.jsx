import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Award,
  BookOpen,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Computer,
  FlaskConical,
  GraduationCap,
  Landmark,
  MonitorSmartphone,
  NotebookPen,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

const heroStats = [
  { value: '100%', label: 'National Pass Rate', detail: '+1.0% vs prior year' },
  { value: '70+', label: 'Years of Excellence' },
  { value: '2', label: 'Official Academic Streams' },
  { value: '127', label: 'Computers & Smart Facilities' },
];

const pillars = [
  { icon: ShieldCheck, title: 'Conscience', text: 'Moral compass guiding our actions.' },
  { icon: BrainCircuit, title: 'Science', text: 'Pursuit of knowledge and discovery.' },
  { icon: Award, title: 'Excellence', text: 'Striving for the highest standards.' },
];

const strengths = [
  { icon: Award, title: 'Top Ranked School', text: 'Consistently among Rwanda\'s top performers.' },
  { icon: GraduationCap, title: 'Catholic Marist Day School', text: 'Science, humanities, and moral discipline.' },
  { icon: Building2, title: 'State-of-the-Art Facilities', text: '10+ Science & IT Labs.' },
  { icon: BookOpen, title: 'Advanced Verbal Skills', text: 'English language immersion.' },
  { icon: Sparkles, title: 'Two Official Streams', text: 'Maths & Science; Arts & Humanities.' },
];

const timeline = [
  {
    stage: 'Stage 1',
    title: 'S1–S3 Foundation Building',
    text: "O'Level core subjects: Mathematics, Physics, Chemistry, Biology, English, Kinyarwanda.",
  },
  {
    stage: 'Stage 2',
    title: 'S4–S6 Stream Specialization',
    text: 'Students specialize in Maths & Science or Arts & Humanities.',
  },
  {
    stage: 'Stage 3',
    title: 'Beyond University & Career',
    text: 'Engineering, Medicine, Research, Technology.',
  },
];

const oLevelSubjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Kinyarwanda',
  'Geography',
  'History',
  'Entrepreneurship',
  'Farming',
  'Physical Education',
  'Religious Education',
];

const facilityData = [
  {
    title: 'The Library',
    text: 'Hard & soft E-books, study prep space',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900',
  },
  {
    title: 'Smart Classes',
    text: 'Projectors, whiteboards & high-speed internet',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=900',
  },
  {
    title: 'Science Labs',
    text: '3 dedicated labs for Physics, Chemistry, Biology',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900',
  },
  {
    title: 'Computer Labs',
    text: '127 computers across 2 high-speed labs',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900',
  },
  {
    title: 'Video Conference Room',
    text: 'Direct international collaboration setup',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900',
  },
  {
    title: 'The Hall',
    text: 'Multi-purpose student hall for debates and events',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900',
  },
];

export default function AcademicsPage() {
  const { t } = useTranslation();
  const streams = t('home.curriculum.streams', { returnObjects: true });

  return (
    <div className="academics-page-shell">
      <style>{`
        .academics-page-shell {
          background: linear-gradient(180deg, #f5f9ff 0%, #eef6ff 100%);
          color: #0f172a;
          font-family: var(--font-body);
        }

        .academics-page-shell * { box-sizing: border-box; }
        .academics-page-shell a { text-decoration: none; }
        .academics-page-shell img { max-width: 100%; display: block; }
        .academics-page-shell h1, .academics-page-shell h2, .academics-page-shell h3, .academics-page-shell h4 {
          margin: 0;
          font-family: var(--font-heading);
          color: #0f172a;
          line-height: 1.12;
        }
        .academics-page-shell p { margin: 0; line-height: 1.75; }

        .academics-section-shell {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .academics-hero {
          position: relative;
          background: linear-gradient(90deg, rgba(17, 32, 67, 0.9), rgba(30, 86, 160, 0.8));
          color: #fff;
          overflow: hidden;
        }

        .academics-hero-inner {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .academics-hero-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
          padding: 9rem 0 5.5rem;
          text-align: left;
        }

        .academics-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.6rem 1rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #f8fafc;
        }

        .academics-hero h1 {
          margin-top: 1.2rem;
          font-size: clamp(2.8rem, 5vw, 4.8rem);
          letter-spacing: -0.05em;
          color: #ffffff;
        }

        .academics-hero p {
          margin-top: 1rem;
          max-width: 680px;
          font-size: 1.08rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .academics-metrics-wrap {
          position: relative;
          z-index: 10;
          margin-top: -38px;
          margin-bottom: 2.8rem;
        }

        .academics-metrics-grid {
          width: min(1180px, calc(100% - 2rem));
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .academics-metric {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1rem;
          padding: 1rem 0.8rem;
          text-align: center;
          box-shadow: 0 18px 34px rgba(15, 23, 42, 0.08);
        }

        .academics-metric strong {
          display: block;
          color: #1e56a0;
          font-size: clamp(1.5rem, 2.4vw, 2.2rem);
          font-family: var(--font-heading);
        }

        .academics-metric span {
          display: block;
          margin-top: 0.4rem;
          color: #475569;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .academics-metric small {
          display: block;
          margin-top: 0.25rem;
          color: #64748b;
          font-size: 0.65rem;
        }

        .academics-section {
          padding: 4.5rem 0;
        }

        .academics-pillar-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
          margin-top: 2rem;
        }

        .academics-pillar {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.2rem;
          padding: 1.5rem 1.2rem;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .academics-pillar:hover,
        .academics-strength-card:hover,
        .academics-combo-card:hover,
        .academics-stream-card:hover,
        .academics-facility-card:hover,
        .academics-subject-pill:hover {
          transform: translate(-2px, -8px) translateX(1px);
          box-shadow: 0 24px 40px rgba(30, 86, 160, 0.14);
          border-color: rgba(30, 86, 160, 0.6);
        }

        .academics-pillar-icon {
          width: 3.2rem;
          height: 3.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.9rem;
          background: rgba(30, 86, 160, 0.08);
          color: #1e56a0;
          margin-bottom: 0.9rem;
        }

        .academics-pillar h3 {
          font-size: 1.25rem;
          margin-bottom: 0.45rem;
        }

        .academics-pillar p,
        .academics-lead-copy p,
        .academics-strength-card p,
        .academics-stream-card p,
        .academics-facility-copy p,
        .academics-intro-text,
        .academics-note {
          color: #475569;
        }

        .academics-lead-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 1.5rem;
          align-items: center;
          margin-top: 2rem;
        }

        .academics-section-kicker {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          background: rgba(30, 86, 160, 0.08);
          border: 1px solid rgba(30, 86, 160, 0.12);
          color: #1e56a0;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .academics-lead-copy h2,
        .academics-subheader h2,
        .academics-journey-header h2,
        .academics-facilities h2,
        .academics-callout h2 {
          margin-top: 1rem;
          font-size: clamp(2rem, 3vw, 3rem);
          color: #0f172a;
        }

        .academics-lead-copy p { margin-top: 1rem; }

        .academics-strength-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .academics-strength-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1rem;
          padding: 1.2rem 1rem;
          box-shadow: 0 16px 28px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .academics-strength-card .icon-wrap {
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(30, 86, 160, 0.08);
          border-radius: 0.85rem;
          color: #1e56a0;
          margin-bottom: 0.8rem;
        }

        .academics-strength-card h3 {
          font-size: 1rem;
          margin-bottom: 0.45rem;
        }

        .academics-journey {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .academics-journey-card {
          position: relative;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.1rem;
          padding: 1.5rem 1.2rem 1.2rem;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .academics-journey-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 40px rgba(30, 86, 160, 0.12);
          border-color: rgba(30, 86, 160, 0.5);
        }

        .academics-journey-card::before {
          content: "";
          position: absolute;
          left: 1.25rem;
          top: 1.1rem;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          box-shadow: 0 0 0 7px rgba(37, 99, 235, 0.18);
        }

        .academics-journey-card .stage {
          display: block;
          padding-left: 1.8rem;
          color: #1e56a0;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .academics-journey-card h3 {
          margin-top: 0.8rem;
          padding-left: 1.8rem;
          font-size: 1.1rem;
        }

        .academics-journey-card p {
          margin-top: 0.75rem;
          padding-left: 1.8rem;
          color: #475569;
        }

        .academics-subject-section {
          background: rgba(30, 86, 160, 0.04);
        }

        .academics-subject-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 2rem;
        }

        .academics-subject-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          color: #1e293b;
          font-weight: 700;
          box-shadow: 0 12px 22px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .academics-stream-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.1rem;
          margin-top: 1.8rem;
        }

        .academics-stream-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(234,244,255,0.92));
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.1rem;
          padding: 1.4rem 1.2rem;
          transition: all 0.3s ease-out;
        }

        .stream-badge {
          display: inline-flex;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: rgba(37, 99, 235, 0.12);
          border: 1px solid rgba(37, 99, 235, 0.28);
          color: #1d4ed8;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .academics-stream-card h3 {
          font-size: 1.2rem;
          margin-top: 0.9rem;
        }

        .stream-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .stream-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.42rem 0.7rem;
          border-radius: 999px;
          background: rgba(30, 86, 160, 0.08);
          color: #1e56a0;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .academics-facilities-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.1rem;
          margin-top: 2rem;
        }

        .academics-facility-card {
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(30, 86, 160, 0.12);
          border-radius: 1.2rem;
          overflow: hidden;
          box-shadow: 0 18px 32px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease-out;
        }

        .academics-facility-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
        }

        .academics-facility-copy {
          padding: 1.1rem 1rem 1.2rem;
        }

        .academics-facility-copy h3 {
          font-size: 1.15rem;
          margin-bottom: 0.45rem;
        }

        .academics-callout {
          background: linear-gradient(135deg, rgba(18,59,115,1), rgba(30,86,160,1));
          color: #ffffff;
          border-radius: 1.5rem;
          padding: 2rem 2.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.2rem;
          box-shadow: 0 22px 36px rgba(18,59,115,0.18);
        }

        .academics-callout h2 {
          color: #ffffff;
          margin-top: 0.5rem;
          font-size: clamp(1.9rem, 3vw, 2.8rem);
        }

        .academics-callout-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .academics-callout-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          min-height: 48px;
          padding: 0.8rem 1.2rem;
          border-radius: 999px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .academics-callout-btn.primary {
          background: #2563eb;
          color: #ffffff;
        }

        .academics-callout-btn.secondary {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .academics-callout-btn:hover { transform: translateY(-2px); }

        @media (max-width: 980px) {
          .academics-strength-grid,
          .academics-facilities-grid,
          .academics-journey,
          .academics-metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .academics-strength-grid { display: grid; }
          .academics-callout { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 760px) {
          .academics-hero-inner { min-height: 500px; }
          .academics-metrics-grid,
          .academics-pillar-grid,
          .academics-strength-grid,
          .academics-stream-grid,
          .academics-facilities-grid,
          .academics-journey,
          .academics-lead-grid {
            grid-template-columns: 1fr;
          }

          .academics-metrics-grid { display: grid; }
          .academics-pillar-grid, .academics-strength-grid, .academics-stream-grid, .academics-facilities-grid, .academics-journey, .academics-lead-grid { display: grid; }
          .academics-section { padding: 3.5rem 0; }
        }
      `}</style>

      <section className="academics-hero">
        <div className="academics-hero-inner">
          <div className="academics-hero-content">
            <div className="academics-badge">Catholic Marist Day School</div>
            <h1>Science, Humanities & Conscience</h1>
            <p>
              Nurturing scientific curiosity, human understanding, and moral discipline through rigorous study and a strong Catholic Marist identity.
            </p>

          </div>
        </div>
      </section>

      <div className="academics-metrics-wrap">
        <div className="academics-metrics-grid">
          {heroStats.map((stat) => (
            <div className="academics-metric" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              {stat.detail ? <small>{stat.detail}</small> : null}
            </div>
          ))}
        </div>
      </div>

      <section className="academics-section" id="school-rigor">
        <div className="academics-section-shell">
          <div className="academics-subheader">
            <span className="academics-section-kicker">Academic Rigor</span>
            <h2>A School of Academic Rigor</h2>
          </div>

          <div className="academics-pillar-grid">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div className="academics-pillar" key={title}>
                <div className="academics-pillar-icon">
                  <Icon size={28} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="academics-lead-grid">
            <div className="academics-lead-copy">
              <p className="academics-intro-text">
                Our competence-based curriculum is designed to build deep understanding, critical thinking, and practical
                problem-solving skills. From the foundation years to advanced study, students are prepared to thrive at
                university and as future leaders in science and society.
              </p>
            </div>

            <div className="academics-note">
              <p>
                We place strong emphasis on not just what students know, but how well they can apply knowledge in real-world
                situations, from laboratories and digital spaces to community and civic engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="academics-section" id="strengths">
        <div className="academics-section-shell">
          <div className="academics-subheader">
            <span className="academics-section-kicker">Academic Strengths</span>
            <h2>Core Academic Strengths</h2>
          </div>

          <div className="academics-strength-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div className="academics-strength-card" key={title}>
                <div className="icon-wrap">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academics-section" id="journey">
        <div className="academics-section-shell">
          <div className="academics-journey-header">
            <span className="academics-section-kicker">Academic Pathway</span>
            <h2>Academic Journey</h2>
          </div>

          <div className="academics-journey">
            {timeline.map((item) => (
              <div className="academics-journey-card" key={item.stage}>
                <span className="stage">{item.stage}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academics-section academics-subject-section" id="curriculum">
        <div className="academics-section-shell">
          <div className="academics-subheader">
            <span className="academics-section-kicker">Curriculum - O'Level Subjects</span>
            <h2>Curriculum - O'Level Subjects</h2>
          </div>

          <div className="academics-subject-grid">
            {oLevelSubjects.map((subject) => (
              <div className="academics-subject-pill" key={subject}>{subject}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="academics-section" id="science-pathways">
        <div className="academics-section-shell">
          <div className="academics-subheader">
            <span className="academics-section-kicker">{t('home.curriculum.badge')}</span>
            <h2>{t('home.curriculum.title')}</h2>
            <p className="academics-intro-text" style={{ marginTop: '1rem' }}>
              {t('home.curriculum.description')}
            </p>
          </div>

          <div className="academics-stream-grid">
            {streams.map(({ title, tags, description }) => (
              <div className="academics-stream-card" key={title}>
                <span className="stream-badge">{title}</span>
                <h3>{title}</h3>
                <div className="stream-tags">
                  {tags.map((tag) => (
                    <span className="stream-tag" key={`${title}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <p style={{ marginTop: '1rem' }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academics-section" id="facilities">
        <div className="academics-section-shell">
          <div className="academics-facilities">
            <span className="academics-section-kicker">Facilities</span>
            <h2>Our Facilities</h2>
            <p className="academics-intro-text" style={{ marginTop: '1rem' }}>
              We are one of the best well-equipped schools in the country to make learning enjoyable.
            </p>
          </div>

          <div className="academics-facilities-grid">
            {facilityData.map(({ title, text, image }) => (
              <div className="academics-facility-card" key={title}>
                <img src={image} alt={title} />
                <div className="academics-facility-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academics-section" style={{ paddingTop: '1rem' }}>
        <div className="academics-section-shell">
          <div className="academics-callout">
            <div>
              <span className="academics-section-kicker" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Admissions
              </span>
              <h2>Ready to Join Our Academic Excellence?</h2>
            </div>

            <div className="academics-callout-actions">
              <a href="/contact" className="academics-callout-btn primary">Get in Touch</a>
              <a href="/about" className="academics-callout-btn secondary">Learn About Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}