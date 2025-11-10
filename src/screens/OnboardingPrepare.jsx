import { Link } from 'react-router-dom';

const actions = [
  {
    icon: '📝',
    title: 'Sermons',
    description: 'Generate outlines',
  },
  {
    icon: '📘',
    title: 'Doctrines',
    description: 'Summarize topics',
  },
  {
    icon: '🤝',
    title: 'Counseling',
    description: 'Get guidance',
  },
];

export default function OnboardingPrepare() {
  return (
    <section className="screen-card" aria-labelledby="prepare-title" style={{ gap: '1.25rem' }}>
      <div className="pagination-dots" aria-hidden="true">
        <span />
        <span className="active" />
        <span />
      </div>

      <header style={{ textAlign: 'center', display: 'grid', gap: '0.75rem' }}>
        <p className="tag" style={{ justifySelf: 'center' }}>
          • • •
        </p>
        <h2 className="screen-title" id="prepare-title">
          Prepare for Ministry & Teaching
        </h2>
        <p className="section-content" style={{ fontSize: '0.95rem' }}>
          Instantly generate sermon outlines, summarize key doctrines, and get help for counseling situations.
        </p>
      </header>

      <div className="card-grid" style={{ gap: '0.75rem' }}>
        {actions.map((action) => (
          <div key={action.title} className="card-button" style={{ gap: '0.2rem' }}>
            <span className="card-icon" aria-hidden="true">
              {action.icon}
            </span>
            <h3 className="card-title" style={{ fontSize: '1rem' }}>
              {action.title}
            </h3>
            <p className="card-subtitle">{action.description}</p>
          </div>
        ))}
      </div>

      <Link to="/onboarding/context" className="primary-button" style={{ textDecoration: 'none' }}>
        Get Started
      </Link>
    </section>
  );
}
