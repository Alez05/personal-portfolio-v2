import "./contact-cta.css";

const ContactCTA = () => {
  return (
    <section className="ct-section">
      <div className="ct-wrapper">
        <h1 className="ct-title">Let’s connect!</h1>

        <p className="ct-description">
          Interested in collaborations, team projects, or just expanding your
          network? I’d be happy to connect with you.
        </p>

        <a className="ct-link" href="/contact">
          Contact me
        </a>
      </div>
    </section>
  );
};

export { ContactCTA };
