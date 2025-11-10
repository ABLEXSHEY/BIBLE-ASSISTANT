export default function SettingsScreen() {
  return (
    <section className="screen-card" aria-labelledby="settings-title" style={{ gap: '1.25rem' }}>
      <header className="screen-header">
        <div>
          <p className="tag">Settings</p>
          <h2 className="screen-title" id="settings-title">
            Personalize your experience
          </h2>
        </div>
      </header>

      <div className="section">
        <h3 className="section-title">Appearance</h3>
        <label className="section-content" htmlFor="font-slider">
          Font Size
        </label>
        <input id="font-slider" className="slider" type="range" min="0" max="10" defaultValue="5" aria-label="Font size" />
        <div className="card-button" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="section-content" style={{ fontWeight: 500 }}>
            Default Bible Translation
          </span>
          <span className="tag">English Standard Version</span>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Notifications</h3>
        <div className="toggle-row">
          <span className="section-content" style={{ fontWeight: 500 }}>
            Push Notifications
          </span>
          <span className="toggle" role="switch" aria-checked="true" />
        </div>
        <p className="card-subtitle">Daily verse and study reminders</p>
      </div>

      <div className="section">
        <h3 className="section-title">Support &amp; Information</h3>
        <div className="support-links">
          <div className="support-item">
            <span role="img" aria-hidden="true">
              ❓
            </span>
            <span>Help &amp; Support</span>
          </div>
          <div className="support-item">
            <span role="img" aria-hidden="true">
              ℹ️
            </span>
            <span>About Us</span>
          </div>
          <div className="support-item">
            <span role="img" aria-hidden="true">
              📄
            </span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <p className="card-subtitle" style={{ textAlign: 'center' }}>Version 1.0.2</p>
    </section>
  );
}
