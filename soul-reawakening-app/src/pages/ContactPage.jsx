import {
  Container,
  RevealSection,
  SectionLabel,
  PageTitle,
  BodyText,
  Divider,
  Highlight,
} from '../components/ui';
import { ContactForm } from '../components/forms';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { siteConfig } from '../config/site';

const ContactPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <SEO
      title="Contact"
      description="Have a question about coaching, an upcoming workshop, or a collaboration? I'd love to hear from you."
    />

    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>Contact</SectionLabel>
          <PageTitle>
            Let's <Highlight>Connect</Highlight>
          </PageTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
          }}
        >
          <RevealSection>
            <div>
              <h3
                style={{
                  fontFamily: fonts.display,
                  fontSize: "28px",
                  fontWeight: 400,
                  color: colors.espresso,
                  marginBottom: "20px",
                }}
              >
                Get in Touch
              </h3>

              <BodyText>
                Have a question about coaching, an upcoming workshop, or a collaboration? I'd love
                to hear from you. Fill out the form or reach out directly — every message is read
                with care.
              </BodyText>

              <div style={{ marginTop: "40px" }}>
                {[
                  { label: "Email", value: siteConfig.email, icon: "✉", href: `mailto:${siteConfig.email}` },
                  {
                    label: "Instagram",
                    value: siteConfig.social.instagram,
                    icon: "◎",
                    href: siteConfig.social.instagramUrl,
                  },
                  {
                    label: "YouTube",
                    value: siteConfig.social.youtube,
                    icon: "▶",
                    href: siteConfig.social.youtubeUrl,
                  },
                  { label: "Location", value: siteConfig.location, icon: "◈" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 0",
                      borderBottom: `1px solid ${colors.sand}`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.display,
                        fontSize: "18px",
                        color: colors.burntOrange,
                        width: "28px",
                      }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <span
                        style={{
                          fontFamily: fonts.body,
                          fontSize: "10px",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: colors.taupe,
                        }}
                      >
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("mailto") ? undefined : "_blank"}
                          rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                          style={{
                            display: "block",
                            fontFamily: fonts.body,
                            fontSize: "15px",
                            color: colors.charcoal,
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => (e.target.style.color = colors.burntOrange)}
                          onMouseLeave={(e) => (e.target.style.color = colors.charcoal)}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontFamily: fonts.body,
                            fontSize: "15px",
                            color: colors.charcoal,
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <ContactForm />
          </RevealSection>
        </div>
      </Container>
    </section>
  </div>
);

export default ContactPage;
