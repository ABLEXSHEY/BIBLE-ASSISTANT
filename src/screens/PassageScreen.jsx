const sections = [
  {
    title: 'Immediate Context',
    body: 'Jesus explains the depth of God’s love to Nicodemus, emphasizing belief in the Son for eternal life.',
  },
  {
    title: 'Historical Background',
    body: 'John records this conversation in Jerusalem during Passover, highlighting the contrast between earthly and heavenly understanding.',
  },
  {
    title: 'Key Words',
    body: '“Only begotten” (monogenes) underscores the uniqueness of Christ; “believeth” invites trust and allegiance.',
  },
  {
    title: 'Theological Message',
    body: 'The verse reveals God’s initiating love and the universal invitation of the gospel.',
  },
  {
    title: 'How it Fits the Whole Bible',
    body: 'Connects with God’s promises to bless the nations through Abraham and fulfills prophecies concerning the Messiah.',
  },
  {
    title: 'Modern Application',
    body: 'Encourages believers to share the message of salvation with clarity and compassion.',
  },
  {
    title: 'Abuse Watch',
    body: 'Be cautious of using the verse to minimize the call to repentance or to excuse harmful behavior.',
  },
];

export default function PassageScreen() {
  return (
    <section className="screen-card" aria-labelledby="passage-title" style={{ gap: '0.75rem' }}>
      <header className="screen-header">
        <div>
          <p className="tag">John 3:16</p>
          <h2 className="screen-title" id="passage-title">
            "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish but have everlasting life."
          </h2>
        </div>
        <button className="pill" type="button">
          Share ↗
        </button>
      </header>

      <article className="section" style={{ gap: '0.4rem' }}>
        <h3 className="section-title">Passage Text</h3>
        <p className="section-content">
          For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish but have eternal life.
        </p>
      </article>

      {sections.map((section) => (
        <div key={section.title} className="section-toggle">
          <span>{section.title}</span>
          <span aria-hidden="true">⌄</span>
        </div>
      ))}
    </section>
  );
}
