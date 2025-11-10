import { Link } from 'react-router-dom';

const quickLinks = [
  {
    to: '/passage/john-3-16',
    icon: '📖',
    title: 'Passage Study',
    subtitle: 'Explore verses deeply',
  },
  {
    to: '/premium',
    icon: '📝',
    title: 'Sermon Outline',
    subtitle: 'Build impactful sermons',
  },
  {
    to: '/onboarding/context',
    icon: '📚',
    title: 'Doctrine Summary',
    subtitle: 'Review key doctrines',
  },
  {
    to: '/counseling',
    icon: '🤝',
    title: 'Counseling & Care',
    subtitle: 'Offer wise guidance',
  },
];

export default function HomeScreen() {
  return (
    <section className="screen-card" aria-labelledby="home-title">
      <header className="screen-header">
        <div>
          <p className="tag">Bible Assistant</p>
          <h2 className="screen-title" id="home-title">
            "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
          </h2>
          <p className="section-content" style={{ color: '#3b4cca', fontWeight: 600 }}>
            John 3:16
          </p>
        </div>
        <button className="pill" type="button" aria-label="Share verse">
          ↗ Share
        </button>
      </header>

      <label className="input-bar" htmlFor="home-search">
        <span role="img" aria-hidden="true">
          🔍
        </span>
        <input
          id="home-search"
          type="search"
          placeholder="Ask a question..."
          aria-label="Ask a question"
        />
        <span role="img" aria-hidden="true">
          🎙️
        </span>
      </label>

      <div className="card-grid" role="list">
        {quickLinks.map((link) => (
          <Link to={link.to} key={link.title} className="card-button" role="listitem">
            <span className="card-icon" aria-hidden="true">
              {link.icon}
            </span>
            <h3 className="card-title">{link.title}</h3>
            <p className="card-subtitle">{link.subtitle}</p>
          </Link>
        ))}
      </div>

      <footer className="pagination-dots" aria-label="Primary navigation">
        <span className="active" aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </footer>
    </section>
  );
}
