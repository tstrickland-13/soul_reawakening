import {
  Container,
  Button,
  RevealSection,
  PlaceholderImg,
  SectionLabel,
  SectionHeading,
  PageTitle,
  BodyText,
  Divider,
  Highlight,
} from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { ownerInfo } from '../config/site';

const AboutPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <SEO
      title="About"
      description={`Learn about ${ownerInfo.name}, holistic wellness coach and founder of Soul Reawakening.`}
    />

    {/* Hero */}
    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>About</SectionLabel>
          <PageTitle>
            Meet <Highlight>{ownerInfo.name.split(" ")[0]}</Highlight>
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
            alignItems: "start",
          }}
        >
          <RevealSection>
            <PlaceholderImg height="600px" text="Makini Portrait" />
          </RevealSection>

          <RevealSection delay={0.15}>
            <p
              style={{
                fontFamily: fonts.accent,
                fontSize: "22px",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: colors.warmGray,
                marginBottom: "32px",
              }}
            >
              "{ownerInfo.quote}"
            </p>

            <BodyText>{ownerInfo.bio}</BodyText>
            <BodyText style={{ marginTop: "20px" }}>{ownerInfo.extendedBio}</BodyText>
            <BodyText style={{ marginTop: "20px" }}>{ownerInfo.athleteBio}</BodyText>

            <div
              style={{
                marginTop: "40px",
                padding: "32px",
                background: colors.sandLight,
                borderLeft: `3px solid ${colors.gold}`,
              }}
            >
              <span
                style={{
                  fontFamily: fonts.body,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: colors.gold,
                  fontWeight: 600,
                }}
              >
                Areas of Focus
              </span>
              <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ownerInfo.focusAreas.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: fonts.body,
                      fontSize: "12px",
                      padding: "6px 16px",
                      border: `1px solid ${colors.taupe}`,
                      color: colors.warmGray,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <Button to="/booking">Work With Me</Button>
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>

    {/* Values Section */}
    <section style={{ padding: "100px 0", background: colors.warmWhite }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>My Approach</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>Guiding Principles</SectionHeading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
          </div>
        </RevealSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {[
            {
              title: "Holistic Perspective",
              description:
                "I believe in nurturing the whole person — mind, body, and spirit. True transformation happens when we address all aspects of our being.",
              icon: "◇",
            },
            {
              title: "Safe Space",
              description:
                "Every session is held in a container of trust, confidentiality, and non-judgment. Your story is sacred, and you are always in control.",
              icon: "✧",
            },
            {
              title: "Practical Wisdom",
              description:
                "Spiritual growth doesn't have to be abstract. I blend timeless wisdom with evidence-based practices you can apply immediately.",
              icon: "◈",
            },
          ].map((value, i) => (
            <RevealSection key={i} delay={i * 0.12}>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "36px",
                    color: colors.gold,
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {value.icon}
                </span>
                <h3
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "24px",
                    fontWeight: 500,
                    color: colors.espresso,
                    marginBottom: "12px",
                  }}
                >
                  {value.title}
                </h3>
                <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
                  {value.description}
                </BodyText>
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

export default AboutPage;
