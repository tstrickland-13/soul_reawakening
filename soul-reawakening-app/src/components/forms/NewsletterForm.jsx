import { useState } from 'react';
import { colors, fonts } from '../../config/tokens';
import Button from '../ui/Button';

const NewsletterForm = ({ variant = "inline" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "newsletter",
          email: email,
        }).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "14px",
            color: colors.gold,
            fontWeight: 500,
          }}
        >
          ✧ You're subscribed! Welcome to the journey.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Netlify hidden form for build detection */}
      <form name="newsletter" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="email" name="email" />
      </form>

      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{
          display: variant === "inline" ? "flex" : "block",
          gap: "0",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        
        {/* Honeypot */}
        <p style={{ display: "none" }}>
          <label>
            Don't fill: <input name="bot-field" />
          </label>
        </p>

        {error && (
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: "12px",
              color: colors.roseDust,
              marginBottom: "8px",
            }}
          >
            {error}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: 1,
            padding: "16px 20px",
            fontFamily: fonts.body,
            fontSize: "14px",
            border: `1px solid ${colors.taupe}`,
            borderRight: variant === "inline" ? "none" : `1px solid ${colors.taupe}`,
            background: colors.white,
            outline: "none",
            color: colors.charcoal,
            marginBottom: variant === "inline" ? 0 : "12px",
            width: variant === "inline" ? "auto" : "100%",
          }}
        />
        <Button type="submit" style={{ borderRadius: 0 }}>
          Subscribe
        </Button>
      </form>

      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "11px",
          color: colors.taupe,
          marginTop: "12px",
          textAlign: "center",
        }}
      >
        No spam, ever. Unsubscribe anytime.
      </p>
    </>
  );
};

export default NewsletterForm;
