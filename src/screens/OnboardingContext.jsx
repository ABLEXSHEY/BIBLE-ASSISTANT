import { Link } from 'react-router-dom';

export default function OnboardingContext() {
  return (
    <section className="screen-card" aria-labelledby="context-title" style={{ gap: '1.25rem' }}>
      <div className="pagination-dots" aria-hidden="true">
        <span />
        <span />
        <span className="active" />
      </div>

      <div className="card-button" style={{ gap: '0.5rem', borderStyle: 'dashed', borderColor: '#e2e8f0' }}>
        <label htmlFor="context-search" className="section-title">
          Search Passage
        </label>
        <div className="input-bar" style={{ border: '1px solid #e2e8f0' }}>
          <span role="img" aria-hidden="true">
            🔍
          </span>
          <input id="context-search" type="search" defaultValue="John 3:16" aria-label="Search scripture" />
        </div>
        <button className="card-button" style={{ borderStyle: 'dashed', borderColor: '#e2e8f0', gap: '0.3rem' }}>
          <span className="card-subtitle" style={{ fontWeight: 500 }}>Historical Context</span>
        </button>
        <button className="card-button" style={{ borderStyle: 'dashed', borderColor: '#e2e8f0', gap: '0.3rem' }}>
          <span className="card-subtitle" style={{ fontWeight: 500 }}>Key Words</span>
        </button>
      </div>

      <header style={{ textAlign: 'center', display: 'grid', gap: '0.75rem' }}>
        <h2 className="screen-title" id="context-title">
          Understand Scripture in Context
        </h2>
        <p className="section-content" style={{ fontSize: '0.95rem' }}>
          Look up any passage to get immediate context, historical background, key word analysis, and modern application.
        </p>
      </header>

      <div className="toggle-row" style={{ justifyContent: 'space-between' }}>
        <Link to="/onboarding/prepare" className="primary-button" style={{ background: '#e2e8f0', color: '#1f2933', textDecoration: 'none' }}>
          Back
        </Link>
        <Link to="/" className="primary-button" style={{ textDecoration: 'none' }}>
          Next
        </Link>
      </div>
    </section>
  );
}
