import { Link } from 'react-router-dom';

export default function OnboardingWelcome() {
  return (
    <section className="screen-card" aria-labelledby="welcome-title">
      <div className="pagination-dots" aria-hidden="true">
        <span className="active" />
        <span />
        <span />
      </div>
      <div style={{ textAlign: 'center', display: 'grid', gap: '1.5rem' }}>
        <h2 className="screen-title" id="welcome-title">
          Welcome to your AI Bible Study Assistant.
        </h2>
        <p className="section-content" style={{ fontSize: '0.95rem' }}>
          A tool to help you study the Bible responsibly, clearly, and pastorally.
        </p>
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '26px',
            background: '#1f4dc4',
            color: '#ffffff',
            display: 'grid',
            placeItems: 'center',
            justifySelf: 'center',
            fontSize: '2.5rem',
          }}
          aria-hidden="true"
        >
          📘
        </div>
      </div>
      <Link to="/onboarding/prepare" className="primary-button" style={{ textDecoration: 'none' }}>
        Next
      </Link>
    </section>
  );
}
