import { useState } from 'react';
import { colors, fonts } from '../../config/tokens';
import Button from '../ui/Button';

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontFamily: fonts.body,
  fontSize: "14px",
  border: `1px solid ${colors.sand}`,
  background: colors.cream,
  outline: "none",
  color: colors.charcoal,
  transition: "border-color 0.3s ease",
};

const labelStyle = {
  fontFamily: fonts.body,
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: colors.warmGray,
  display: "block",
  marginBottom: "8px",
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          background: colors.warmWhite,
          border: `1px solid ${colors.sand}`,
          padding: "48px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>✧</span>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: "24px",
            color: colors.espresso,
            marginBottom: "12px",
          }}
        >
          Message Sent
        </h3>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "14px",
            color: colors.warmGray,
            lineHeight: 1.7,
          }}
        >
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: colors.warmWhite,
        border: `1px solid ${colors.sand}`,
        padding: "48px",
      }}
    >
      {/* Netlify hidden form for build detection */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message" />
      </form>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam prevention */}
        <p style={{ display: "none" }}>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>

        {error && (
          <div
            style={{
              background: colors.roseDust,
              padding: "12px 16px",
              marginBottom: "24px",
              fontFamily: fonts.body,
              fontSize: "13px",
              color: colors.espresso,
            }}
          >
            {error}
          </div>
        )}

        {[
          { label: "Name", name: "name", type: "text", placeholder: "Your full name", required: true },
          { label: "Email", name: "email", type: "email", placeholder: "your@email.com", required: true },
          { label: "Subject", name: "subject", type: "text", placeholder: "What's this about?" },
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: "24px" }}>
            <label htmlFor={field.name} style={labelStyle}>
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = colors.gold)}
              onBlur={(e) => (e.target.style.borderColor = colors.sand)}
            />
          </div>
        ))}

        <div style={{ marginBottom: "24px" }}>
          <label htmlFor="message" style={labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me what's on your heart..."
            rows={6}
            required
            style={{
              ...inputStyle,
              resize: "vertical",
              lineHeight: 1.7,
            }}
            onFocus={(e) => (e.target.style.borderColor = colors.gold)}
            onBlur={(e) => (e.target.style.borderColor = colors.sand)}
          />
        </div>

        <Button type="submit" style={{ width: "100%" }}>
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
