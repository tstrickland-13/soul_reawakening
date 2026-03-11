import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  RevealSection,
  PlaceholderImg,
  SectionLabel,
  SectionHeading,
  BodyText,
  Divider,
} from '../components/ui';
import { NewsletterForm } from '../components/forms';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { siteConfig, ownerInfo } from '../config/site';
import { testimonials, offerings, guidingPrinciples } from '../config/content';

const HomePage = () => (
  <div>
    <SEO />

    {/* HERO */}
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.sandLight} 50%, ${colors.cream} 100%)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.gold}08 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "gentlePulse 6s ease-in-out infinite",
        }}
      />

      <Container style={{ textAlign: "center", position: "relative", zIndex: 1, paddingTop: "100px" }}>
        <div className="animate-in">
          <SectionLabel>Welcome to</SectionLabel>
        </div>

        <h1
          className="animate-in-delay-1"
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(42px, 7vw, 82px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: colors.espresso,
            margin: "20px 0 12px",
            letterSpacing: "-1px",
          }}
        >
          Soul{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400, color: colors.gold }}>
            Reawakening
          </span>
        </h1>

        <p
          className="animate-in-delay-1"
          style={{
            fontFamily: fonts.display,
            fontSize: "clamp(20px, 3vw, 30px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: colors.gold,
            marginBottom: "8px",
            letterSpacing: "1px",
          }}
        >
          {siteConfig.tagline}
        </p>

        <p
          className="animate-in-delay-2"
          style={{
            fontFamily: fonts.accent,
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: colors.warmGray,
            marginBottom: "12px",
            letterSpacing: "0.5px",
          }}
        >
          {siteConfig.subtitle}
        </p>

        <div className="animate-in-delay-2" style={{ display: "flex", justifyContent: "center" }}>
          <Divider />
        </div>

        <p
          className="animate-in-delay-3"
          style={{
            fontFamily: fonts.accent,
            fontSize: "16px",
            fontStyle: "italic",
            color: colors.warmGray,
            maxWidth: "580px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
          }}
        >
          &ldquo;{siteConfig.description}&rdquo;
        </p>

        <div
          className="animate-in-delay-4"
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Button to="/shop">Explore Services</Button>
          <Button variant="outline" to="/booking">
            Book A Free Discovery Call
          </Button>
        </div>
      </Container>
    </section>

    {/* ABOUT PREVIEW */}
    <section style={{ padding: "120px 0" }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <RevealSection>
          <PlaceholderImg src="/makini-portrait.png" alt="Makini C. Campbell" height="520px" style={{ objectPosition: "center top" }} />
        </RevealSection>

        <RevealSection delay={0.15}>
          <SectionLabel>About Makini</SectionLabel>
          <SectionHeading style={{ margin: "16px 0" }}>
            About Makini
          </SectionHeading>
          <Divider />
          <BodyText>
            {ownerInfo.bio}
          </BodyText>
          <BodyText style={{ marginTop: "16px" }}>
            Whether you are navigating life transitions, seeking clarity, or ready to step into your
            fullest potential&mdash;your journey starts here.
          </BodyText>
          <div style={{ marginTop: "32px" }}>
            <Button variant="outline" to="/about">
              Read My Story &rarr;
            </Button>
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* FOCUS AREAS */}
    <section style={{ padding: "100px 0", background: colors.sandLight }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Focus Areas</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>How I Support Growth</SectionHeading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {ownerInfo.focusAreas.map((area, i) => (
              <span
                key={i}
                style={{
                  fontFamily: fonts.body,
                  fontSize: "14px",
                  padding: "14px 28px",
                  border: `1px solid ${colors.taupe}`,
                  background: colors.warmWhite,
                  color: colors.charcoal,
                  letterSpacing: "0.5px",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* SERVICES PREVIEW */}
    <section style={{ padding: "100px 0", background: colors.warmWhite }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Offerings</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>Ways We Can Work Together</SectionHeading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
            <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
              Makini&rsquo;s work supports individuals, parents, athletes, and leaders who are seeking
              clarity, growth, and purposeful transformation. Through coaching, workshops, and immersive
              experiences, clients are guided toward deeper alignment, renewed perspective, and meaningful
              personal and professional development.
            </BodyText>
          </div>
        </RevealSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {offerings.map((item, i) => (
            <RevealSection key={i} delay={i * 0.12}>
              <Link to="/shop" style={{ display: "block" }}>
                <div
                  style={{
                    padding: "48px 36px",
                    background: colors.cream,
                    border: `1px solid ${colors.sand}`,
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.gold;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.sand;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.display,
                      fontSize: "32px",
                      color: colors.gold,
                      display: "block",
                      marginBottom: "20px",
                    }}
                  >
                    {item.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: fonts.display,
                      fontSize: "24px",
                      fontWeight: 500,
                      marginBottom: "16px",
                      color: colors.espresso,
                    }}
                  >
                    {item.title}
                  </h3>
                  <BodyText style={{ margin: "0 auto", fontSize: "14px" }}>
                    {item.description}
                  </BodyText>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Button to="/shop">View All Offerings</Button>
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* THE MAKINI CAMPBELL APPROACH */}
    <section style={{ padding: "100px 0" }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>My Approach</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>The Makini Campbell Approach</SectionHeading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
            <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
              The Makini Campbell Approach centers on the belief that meaningful transformation begins
              when individuals reconnect with their authentic selves and align their actions with
              purpose. Drawing from experience across education, leadership, athletics, and holistic
              wellness, Makini combines reflective insight with practical guidance to support
              sustainable personal and professional growth.
            </BodyText>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              background: colors.sandLight,
              borderLeft: `3px solid ${colors.gold}`,
              marginBottom: "64px",
            }}
          >
            <p
              style={{
                fontFamily: fonts.accent,
                fontSize: "22px",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: colors.warmGray,
              }}
            >
              &ldquo;True success is not measured only by achievement, but by alignment&mdash;living
              with clarity, intention, and integrity.&rdquo;
            </p>
          </div>
        </RevealSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
          }}
        >
          {guidingPrinciples.map((principle, i) => (
            <RevealSection key={i} delay={i * 0.12}>
              <div style={{ textAlign: "center", padding: "36px 24px" }}>
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "32px",
                    color: colors.gold,
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {principle.icon}
                </span>
                <h3
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "22px",
                    fontWeight: 500,
                    color: colors.espresso,
                    marginBottom: "12px",
                  }}
                >
                  {principle.title}
                </h3>
                <BodyText style={{ margin: "0 auto", textAlign: "center", fontSize: "14px" }}>
                  {principle.description}
                </BodyText>
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>

    {/* FEATURED QUOTE */}
    <section
      style={{
        padding: "80px 0",
        background: colors.espresso,
      }}
    >
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: fonts.accent,
                fontSize: "clamp(22px, 3vw, 30px)",
                fontStyle: "italic",
                lineHeight: 1.6,
                color: colors.taupeLight,
              }}
            >
              &ldquo;{ownerInfo.quote}&rdquo;
            </p>
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: colors.gold,
                display: "block",
                marginTop: "24px",
              }}
            >
              &mdash; {ownerInfo.name}
            </span>
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* YOUTUBE PREVIEW */}
    <section style={{ padding: "100px 0" }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Watch & Learn</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>Latest from the Channel</SectionHeading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              background: colors.sand,
              border: `1px solid ${colors.sand}`,
            }}
          >
            <iframe
              src={siteConfig.social.youtubePlaylist}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Soul Reawakening YouTube Playlist"
              loading="lazy"
            />
          </div>
        </RevealSection>

        <RevealSection delay={0.25}>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button variant="outline" to="/videos">
              Watch More Videos &rarr;
            </Button>
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* TESTIMONIALS */}
    <section style={{ padding: "100px 0", background: colors.espresso }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Testimonials</SectionLabel>
            <SectionHeading style={{ margin: "16px 0", color: colors.cream }}>
              Words from the Community
            </SectionHeading>
            <div
              style={{
                width: "48px",
                height: "1px",
                background: colors.gold,
                margin: "20px auto",
              }}
            />
          </div>
        </RevealSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {testimonials.map((t, i) => (
            <RevealSection key={t.id} delay={i * 0.12}>
              <div style={{ padding: "40px 32px", borderLeft: `2px solid ${colors.gold}` }}>
                <p
                  style={{
                    fontFamily: fonts.accent,
                    fontSize: "18px",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    color: colors.taupeLight,
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "12px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: colors.gold,
                  }}
                >
                  &mdash; {t.name}
                </span>
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>

    {/* EMAIL SIGNUP */}
    <section style={{ padding: "100px 0", background: colors.sandLight }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
            <SectionLabel>Stay Connected</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>Join the Journey</SectionHeading>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
            <BodyText style={{ margin: "0 auto 32px", textAlign: "center" }}>
              Your journey toward alignment, clarity, and purpose starts here.
            </BodyText>
            <NewsletterForm />
          </div>
        </RevealSection>
      </Container>
    </section>
  </div>
);

export default HomePage;
