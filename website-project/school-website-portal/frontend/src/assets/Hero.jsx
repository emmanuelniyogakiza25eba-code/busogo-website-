import React from 'react';
import { useTranslation } from 'react-i18next';
import TypewriterHeader from '../TypewriterHeader.jsx';
import {
  ArrowRight,
  Award,
  BookOpen,
  BookText,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Library,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const stats = [
  { icon: Award, value: '70+', label: 'Years of Excellence' },
  { icon: Users, value: '800+', label: 'Students' },
  { icon: CheckCircle2, value: '99%', label: 'Pass Rate' },
  { icon: GraduationCap, value: '2', label: 'Official Academic Streams' },
];

const heroHighlights = [
  {
    icon: Award,
    title: 'Established 1952',
    description: '70+ Years of Excellence',
  },
  {
    icon: Cpu,
    title: 'Science Excellence',
    description: 'Leading Science Programs',
  },
  {
    icon: ShieldCheck,
    title: 'Christian Values',
    description: 'Marist Tradition & Discipline',
  },
  {
    icon: CheckCircle2,
    title: 'National Recognition',
    description: 'Top Academic Results',
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Conscience',
    text: 'A strong moral compass built on faith, responsibility, respect, and service to the community.',
  },
  {
    icon: Cpu,
    title: 'Science',
    text: 'Hands-on learning, digital competence, and inquiry-driven education for a changing world.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'High expectations, disciplined habits, and academic achievement that prepare learners for leadership.',
  },
];

const excellenceStats = [
  { value: '99%', label: 'National Pass Rate', detail: 'Consistent top performance' },
  { value: '1000+', label: 'Successful Alumni', detail: 'Leaders worldwide' },
  { value: '25+', label: 'Science Awards', detail: 'National competitions' },
  { value: '70+', label: 'Years of Excellence', detail: 'Since 1952' },
];

const facilities = [
  {
    icon: Library,
    title: 'Library',
    text: 'A calm, well-stocked reading environment for independent study and research.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Smart Classes',
    text: 'Technology-enabled learning spaces designed for active and future-ready teaching.',
  },
  {
    icon: BookText,
    title: 'Science Labs',
    text: 'Modern facilities for practical experiments and scientific inquiry across disciplines.',
  },
  {
    icon: Cpu,
    title: 'Computer Lab',
    text: 'Digital learning hubs supporting coding, research, and ICT skills development.',
  },
  {
    icon: Building2,
    title: 'Champagnat Hall',
    text: 'A multipurpose venue for assemblies, celebrations, and school community events.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Student Support',
    text: 'Structured guidance that supports wellness, discipline, and personal growth.',
  },
];

const studentLife = [
  {
    title: 'Competitions',
    text: 'National and international science olympiads, mathematics contests, and academic challenges.',
  },
  {
    title: 'Clubs & Societies',
    text: 'Science club, debate society, environmental club, and coding club for active learning beyond class.',
  },
  {
    title: 'Community Service',
    text: 'Student-led initiatives that create meaningful impact and give back to the local community.',
  },
];

const newsItems = [
  {
    tag: 'Achievement',
    date: 'March 15, 2026',
    title: 'School science teams drive top results at national competitions',
    text: 'Students demonstrated creativity and excellence across science and innovation challenges.',
  },
  {
    tag: 'Facilities',
    date: 'February 28, 2026',
    title: 'New digital learning spaces open to all learners',
    text: 'Our upgraded facilities support STEM teaching, coding, and research-driven study.',
  },
  {
    tag: 'Events',
    date: 'January 10, 2026',
    title: 'Annual Marist celebration strengthens school community',
    text: 'Students, staff, and families came together in a joyful expression of faith and unity.',
  },
];

export default function HomePage() {
  const { t } = useTranslation();
  const translatedStats = t('home.stats', { returnObjects: true });
  const translatedHighlights = t('home.highlights', { returnObjects: true });
  const translatedPillars = t('home.pillars.items', { returnObjects: true });
  const translatedStreams = t('home.curriculum.streams', { returnObjects: true });
  const translatedImpactStats = t('home.impact.stats', { returnObjects: true });
  const translatedStudentLife = t('home.studentLife.items', { returnObjects: true });
  const translatedTestimonials = t('home.testimonials.items', { returnObjects: true });
  const translatedNews = t('home.news.items', { returnObjects: true });

  return (
    <div className="busogo-homepage">
      <section className="hero-section">
        <div className="hero-background" aria-hidden="true">
          <img src="/campus.png" alt={t('home.hero.imageAlt')} className="hero-img" />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <TypewriterHeader text={t('home.hero.title')} />

              <p>{t('home.hero.description')}</p>

              <div className="hero-actions">
                <a href="#academics" className="btn-primary">
                  {t('home.hero.explore')}
                  <Sparkles className="icon-small" />
                </a>
                <a href="#curriculum" className="btn-secondary">
                  {t('home.hero.curriculum')}
                  <ArrowRight className="icon-small" />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="featured-card group">
                <img src="/musanze.jpeg" alt={t('home.featured.imageAlt')} />
                <div className="featured-badge">{t('home.featured.badge')}</div>
                <div className="featured-copy">
                  <h3>{t('home.featured.title')}</h3>
                  <p>{t('home.featured.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-metrics">
            {stats.map(({ icon: Icon }, index) => {
              const { value, label } = translatedStats[index];
              return <div className="metric-pill" key={label}>
                <Icon className="metric-icon" />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="feature-highlight-section">
        <div className="container">
          <div className="feature-grid">
            {heroHighlights.map(({ icon: Icon }, index) => {
              const { title, description } = translatedHighlights[index];
              return <div className="feature-card-item group" key={title}>
                <div className="feature-card-icon">
                  <Icon className="icon-sky-xl" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="container about-grid">
          <div className="about-media">
            <div className="image-frame">
              <img src="/students.jpg" alt={t('home.featured.imageAlt')} />
            </div>
            <div className="floating-note">
              <ShieldCheck className="icon-sky-lg" />
              <div>
                <h4>{t('home.about.spirit')}</h4>
                <p>{t('home.about.spiritText')}</p>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <span className="section-badge">{t('home.about.badge')}</span>
            <h2>{t('home.about.title')}</h2>
            <p>{t('home.about.description')}</p>
            <div className="info-pills">
              <div className="glass-card info-pill">
                <h3>{t('home.about.science')}</h3>
                <p>{t('home.about.scienceText')}</p>
              </div>
              <div className="glass-card info-pill">
                <h3>{t('home.about.faith')}</h3>
                <p>{t('home.about.faithText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-section values-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">{t('home.pillars.badge')}</span>
            <h2>{t('home.pillars.title')}</h2>
          </div>

          <div className="cards-grid three-up values-grid">
            {coreValues.map(({ icon: Icon }, index) => {
              const { title, text } = translatedPillars[index];
              return <div className="glass-card value-card group" key={title}>
                <div className="value-icon-wrap">
                  <Icon className="icon-sky-xl" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="content-section curriculum-section" id="academics">
        <div id="curriculum" />
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">{t('home.curriculum.badge')}</span>
            <h2>{t('home.curriculum.title')}</h2>
            <p>{t('home.curriculum.description')}</p>
          </div>

          <div className="stream-grid">
            {translatedStreams.map(({ title, description, tags }) => (
              <div className="stream-card group" key={title}>
                <div className="stream-header">
                  <span className="stream-badge">{title}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag-list">
                  {tags.map((tag) => (
                    <span className="stream-tag" key={`${title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <div className="section-heading center light-heading">
            <span className="section-badge light">{t('home.impact.badge')}</span>
            <h2>{t('home.impact.title')}</h2>
          </div>

          <div className="impact-grid">
            {excellenceStats.map(({ value: originalValue }, index) => {
              const { value, label, detail } = translatedImpactStats[index];
              return <div className="impact-box" key={originalValue}>
                <strong>{value}</strong>
                <span>{label}</span>
                <small>{detail}</small>
              </div>;
            })}
          </div>
        </div>
      </section>


      <section className="content-section alt-section" id="campus">
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">{t('home.studentLife.badge')}</span>
            <h2>{t('home.studentLife.title')}</h2>
          </div>

          <div className="student-life-grid">
            {studentLife.map(({ title }, index) => {
              const { text } = translatedStudentLife[index];
              return <div className="student-life-item group" key={title}>
                <div className="student-life-icon">
                  <BookOpen className="icon-sky-xl" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="content-section alt-section testimonials-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-badge">{t('home.testimonials.badge')}</span>
            <h2>{t('home.testimonials.title')}</h2>
          </div>

          <div className="testimonial-grid">
            {translatedTestimonials.map(({ quote, name, role }) => (
              <div className="testimonial-card" key={name}>
                <div className="quote-mark">“</div>
                <p>{quote}</p>
                <div className="testimonial-author">
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt-section" id="news">
        <div className="container">
          <div className="news-header">
            <div>
              <span className="section-badge">{t('home.news.badge')}</span>
              <h2>{t('home.news.title')}</h2>
            </div>
            <a href="#" className="link-arrow">
              {t('home.news.viewAll')} <ArrowRight className="icon-small" />
            </a>
          </div>

          <div className="cards-grid three-up">
            {newsItems.map(({ title }, index) => {
              const { tag, date, text } = translatedNews[index];
              return <article className="glass-card news-card group" key={title}>
                <div className="news-thumb">
                  <img
                    className="card-image"
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=900"
                    alt={title}
                  />
                  <span className="news-tag-badge">{tag}</span>
                </div>
                <div className="news-body">
                  <div className="news-date">
                    <span>{date}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <span className="section-badge light">{t('home.cta.badge')}</span>
            <h2>{t('home.cta.title')}</h2>
          </div>
          <a href="/contact" className="btn-primary">{t('home.cta.button')}</a>
        </div>
      </section>
    </div>
  );
}
