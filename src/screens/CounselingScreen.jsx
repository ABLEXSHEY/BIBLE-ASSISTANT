export default function CounselingScreen() {
  return (
    <section className="screen-card" aria-labelledby="counseling-title" style={{ gap: '1rem' }}>
      <header className="screen-header">
        <div>
          <p className="tag">AI Bible Assistant</p>
          <h2 className="screen-title" id="counseling-title">
            Counseling &amp; Care
          </h2>
        </div>
        <div className="segmented-control" role="group" aria-label="Conversation controls">
          <span className="active">Live</span>
          <span>History</span>
        </div>
      </header>

      <div className="conversation" role="log" aria-live="polite">
        <p className="message assistant">
          Welcome to Counseling &amp; Care. How can I assist you with pastoral guidance today?
        </p>
        <p className="message user">
          I'm struggling with how to approach a conflict within my congregation. Can you provide some biblical principles for conflict resolution?
        </p>
        <p className="message assistant">
          Of course. A key principle is found in <strong>Matthew 18:15-17</strong>, which outlines a direct and private approach first. Another is found in <strong>Ephesians 4:2</strong>, which encourages 'bearing with one another in love.' Let's explore these passages.
        </p>
      </div>

      <label className="input-bar" htmlFor="counseling-input">
        <input id="counseling-input" placeholder="Ask a question..." aria-label="Ask the assistant" />
        <button className="primary-button" type="button" style={{ padding: '0.6rem 1.1rem' }}>
          Send
        </button>
      </label>
    </section>
  );
}
