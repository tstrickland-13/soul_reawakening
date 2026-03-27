import {
  Container,
  RevealSection,
  SectionLabel,
  PageTitle,
  BodyText,
  Divider,
  Highlight,
} from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { siteConfig } from '../config/site';

const BookingPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <SEO
      title="Begin Your Journey"
      description="Schedule a Discovery Conversation with Makini to explore where you are in your journey and what support may help you move forward."
    />

    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>Begin Your Journey</SectionLabel>
          <PageTitle>
            Begin Your <Highlight>Journey</Highlight>
          </PageTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider />
          </div>
          <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
            A Discovery Conversation is a space for us to connect and explore where you are in your
            journey and what support may help you move forward with clarity and purpose. This
            conversation allows us to reflect on what you&rsquo;re navigating and determine whether
            working together feels aligned.
          </BodyText>
          <BodyText style={{ margin: "16px auto 0", textAlign: "center" }}>
            Whether you are navigating a life transition, seeking clarity, supporting a young athlete
            as a parent, or ready to step into your fullest potential, this conversation is the first step.
          </BodyText>
        </div>

        <RevealSection>
          <div
            style={{
              border: `1px solid ${colors.sand}`,
              background: colors.warmWhite,
              padding: "24px",
              minHeight: "680px",
            }}
          >
            <iframe
              src={siteConfig.calendlyUrl}
              style={{
                width: "100%",
                height: "640px",
                border: "none",
                minHeight: "640px",
              }}
              title="Schedule a Discovery Conversation"
              loading="lazy"
            />
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div
            style={{
              marginTop: "48px",
              padding: "40px",
              background: colors.sandLight,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px",
              textAlign: "center",
            }}
          >
            {[
              {
                icon: "\u2727",
                title: "Explore",
                description:
                  "Reflect on where you are in your journey and what support might help you move forward.",
              },
              {
                icon: "\u25C8",
                title: "Connect",
                description:
                  "Schedule a Discovery Conversation to explore whether working together feels aligned.",
              },
              {
                icon: "\u25C7",
                title: "Begin",
                description:
                  "Take the first step toward alignment, clarity, and purpose.",
              },
            ].map((step, i) => (
              <div key={i}>
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "28px",
                    color: colors.burntOrange,
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {step.icon}
                </span>
                <h4
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "18px",
                    fontWeight: 500,
                    color: colors.espresso,
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "13px",
                    color: colors.warmGray,
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </Container>
    </section>
  </div>
);

export default BookingPage;
