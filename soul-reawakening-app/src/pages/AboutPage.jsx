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
import { guidingPrinciples } from '../config/content';

const AboutPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <SEO
      title="About"
      description={`Learn about ${ownerInfo.name}, holistic wellness coach, consultant, and educator, and founder of Soul Reawakening.`}
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
              &ldquo;{ownerInfo.quote}&rdquo;
              <br />
              <span
                style={{
                  fontFamily: fonts.body,
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: colors.gold,
                  fontStyle: "normal",
                  display: "inline-block",
                  marginTop: "12px",
                }}
              >
                &mdash; {ownerInfo.name}
              </span>
            </p>

            {ownerInfo.extendedBio.map((paragraph, i) => (
              <BodyText key={i} style={{ marginTop: i === 0 ? "0" : "20px" }}>
                {paragraph}
              </BodyText>
            ))}

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

    {/* Guiding Principles Section */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          {guidingPrinciples.map((value, i) => (
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
