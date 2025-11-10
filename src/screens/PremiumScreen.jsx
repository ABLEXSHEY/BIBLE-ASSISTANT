const plans = [
  {
    tier: 'Free',
    price: '$0',
    cadence: '',
    features: [
      'Passage Study',
      'Sermon Outlines (Limited)',
    ],
  },
  {
    tier: 'Premium',
    price: '$9.99',
    cadence: '/mo',
    features: [
      'Passage Study',
      'Sermon Outlines (Unlimited)',
      'Theological Library',
      'Cloud Sync',
      'Offline Access',
      'AI-Powered Insights',
    ],
    recommended: true,
  },
];

export default function PremiumScreen() {
  return (
    <section className="screen-card" aria-labelledby="premium-title" style={{ gap: '1.25rem' }}>
      <header className="screen-header">
        <div>
          <p className="tag">Go Premium</p>
          <h2 className="screen-title" id="premium-title">
            Unlock powerful tools for deeper study and ministry.
          </h2>
        </div>
      </header>

      <div className="card-grid" style={{ gap: '1rem' }}>
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className={`price-card${plan.recommended ? ' recommended' : ''}`}
            aria-label={`${plan.tier} plan`}
          >
            {plan.recommended && (
              <span className="pill" style={{ alignSelf: 'flex-start' }}>
                Recommended
              </span>
            )}
            <div>
              <p className="price-title">{plan.tier}</p>
              <p className="price-amount">
                {plan.price}
                <small style={{ fontSize: '0.85rem', fontWeight: 500 }}>{plan.cadence}</small>
              </p>
            </div>
            <ul className="feature-list">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="card-button" style={{ gap: '0.5rem', textAlign: 'center' }}>
        <strong>Annual Plan (Save 20%)</strong>
        <button className="primary-button" type="button" style={{ width: '100%' }}>
          Start 7-Day Free Trial
        </button>
        <p className="card-subtitle">
          Cancel anytime. Your subscription will renew automatically until you cancel.
        </p>
        <div className="library-tabs" style={{ justifyContent: 'center' }}>
          <span>Restore Purchase</span>
          <span>Terms &amp; Privacy</span>
        </div>
      </div>
    </section>
  );
}
