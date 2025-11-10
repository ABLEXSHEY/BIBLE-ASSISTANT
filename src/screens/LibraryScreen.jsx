const studies = [
  {
    title: 'Exegesis of Romans 8',
    description: 'An in-depth analysis of key theological themes and encouragements.',
    meta: 'Saved 2 days ago',
  },
  {
    title: 'Parables of Jesus',
    description: 'Understanding the narrative and meaning behind Christ\'s parables.',
    meta: 'Saved 1 week ago',
  },
  {
    title: 'Theological Virtues',
    description: 'A study on Faith, Hope, and Charity in the Pauline epistles.',
    meta: 'Saved 3 weeks ago',
  },
  {
    title: 'Genesis Creation Narrative',
    description: 'Comparing literary structures in Genesis 1 and 2.',
    meta: 'Saved 1 month ago',
  },
];

export default function LibraryScreen() {
  return (
    <section className="screen-card" aria-labelledby="library-title" style={{ gap: '1rem' }}>
      <header className="screen-header">
        <div>
          <p className="tag">Library</p>
          <h2 className="screen-title" id="library-title">
            Saved studies, verses, and outlines
          </h2>
        </div>
        <button className="pill" type="button" aria-label="Open menu">
          ⋮
        </button>
      </header>

      <label className="input-bar" htmlFor="library-search">
        <span role="img" aria-hidden="true">
          🔍
        </span>
        <input id="library-search" placeholder="Search studies, verses, outlines..." />
      </label>

      <div className="library-tabs" role="tablist">
        <span className="active" role="tab" aria-selected="true">
          Saved Studies
        </span>
        <span role="tab" aria-selected="false">
          Favorite Verses
        </span>
        <span role="tab" aria-selected="false">
          My Outlines
        </span>
      </div>

      <div className="section" role="list">
        {studies.map((study) => (
          <div key={study.title} className="list-card" role="listitem">
            <h3 className="section-title" style={{ fontSize: '1rem' }}>
              {study.title}
            </h3>
            <p className="section-content">{study.description}</p>
            <small>{study.meta}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
