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
      title="Book a Session"
      description="Schedule your coaching session with Makini. Choose a time that works for you."
    />

    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>Book a Session</SectionLabel>
          <PageTitle>
            Schedule Your <Highlight>Time</Highlight>
          </PageTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider />
          </div>
          <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
            Ready to begin? Choose a time that works for you. Whether it's an introductory session
            or a follow-up — I'm here to support your journey.
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
              title="Book a Session with Makini"
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
                icon: "✧",
                title: "Choose Your Session",
                description:
                  "Browse available session types and select what resonates with your needs.",
              },
              {
                icon: "◈",
                title: "Pick a Time",
                description:
                  "Find a slot that works with your schedule. All sessions are conducted virtually.",
              },
              {
                icon: "◇",
                title: "Show Up as You Are",
                description:
                  "No preparation needed. Come with an open heart and a willingness to explore.",
              },
            ].map((step, i) => (
              <div key={i}>
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "28px",
                    color: colors.gold,
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
