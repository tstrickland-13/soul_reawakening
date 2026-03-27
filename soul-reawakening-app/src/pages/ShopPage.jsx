import { useState } from 'react';
import {
  Container,
  Button,
  RevealSection,
  SectionLabel,
  PageTitle,
  BodyText,
  Divider,
  Highlight,
} from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { services, targetAudience } from '../config/content';

const ShopPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = ["all", "coaching", "workshops", "retreats"];

  const filtered =
    activeFilter === "all" ? services : services.filter((p) => p.category === activeFilter);

  return (
    <div style={{ paddingTop: "120px" }}>
      <SEO
        title="Offerings"
        description="Explore coaching, workshops, and retreat experiences designed to support your journey toward alignment, clarity, and purpose."
      />

      <section style={{ padding: "60px 0 80px" }}>
        <Container>
          <div className="animate-in" style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Offerings</SectionLabel>
            <PageTitle>
              Ways We Can <Highlight>Work Together</Highlight>
            </PageTitle>
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

          {/* Filters */}
          <div
            className="animate-in-delay-1"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "48px",
              flexWrap: "wrap",
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: fonts.body,
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "10px 24px",
                  border: `1px solid ${activeFilter === f ? colors.charcoal : colors.taupe}`,
                  background: activeFilter === f ? colors.charcoal : "transparent",
                  color: activeFilter === f ? colors.cream : colors.warmGray,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((product, i) => (
              <RevealSection key={product.id} delay={i * 0.08}>
                <div
                  style={{
                    border: `1px solid ${colors.sand}`,
                    background: colors.warmWhite,
                    transition: "all 0.35s ease",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.gold;
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.sand;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontFamily: fonts.body,
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: colors.gold,
                        fontWeight: 600,
                      }}
                    >
                      {product.category}
                    </span>

                    <h3
                      style={{
                        fontFamily: fonts.display,
                        fontSize: "24px",
                        fontWeight: 500,
                        color: colors.espresso,
                        margin: "8px 0 4px",
                      }}
                    >
                      {product.title}
                    </h3>

                    {product.subtitle && (
                      <p
                        style={{
                          fontFamily: fonts.accent,
                          fontSize: "15px",
                          fontStyle: "italic",
                          color: colors.taupe,
                          marginBottom: "16px",
                        }}
                      >
                        {product.subtitle}
                      </p>
                    )}

                    <p
                      style={{
                        fontFamily: fonts.body,
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: colors.warmGray,
                        marginBottom: "20px",
                      }}
                    >
                      {product.description}
                    </p>

                    {product.bestFor && (
                      <div style={{ marginBottom: "20px" }}>
                        <span
                          style={{
                          fontFamily: fonts.body,
                          fontSize: "10px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: colors.burntOrange,
                          fontWeight: 600,
                          }}
                        >
                          Best For
                        </span>
                        <ul
                          style={{
                            marginTop: "8px",
                            paddingLeft: "0",
                            listStyle: "none",
                          }}
                        >
                          {product.bestFor.map((item, j) => (
                            <li
                              key={j}
                              style={{
                                fontFamily: fonts.body,
                                fontSize: "13px",
                                color: colors.warmGray,
                                lineHeight: 1.8,
                                paddingLeft: "16px",
                                position: "relative",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  color: colors.burntOrange,
                                }}
                              >
                                &bull;
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontFamily: fonts.body,
                          fontSize: "13px",
                          fontStyle: "italic",
                          color: colors.taupe,
                        }}
                      >
                        {product.price}
                      </span>
                      <Button to="/booking" style={{ padding: "10px 24px", fontSize: "11px" }}>
                        Inquire
                      </Button>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section style={{ padding: "80px 0", background: colors.sandLight }}>
        <Container>
          <RevealSection>
            <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
              <p
                style={{
                  fontFamily: fonts.accent,
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: colors.warmGray,
                }}
              >
                &ldquo;Clarity begins the moment we pause long enough to listen to the wisdom within.&rdquo;
              </p>
            </div>
          </RevealSection>
        </Container>
      </section>

      {/* Who This Work Is For */}
      <section style={{ padding: "100px 0" }}>
        <Container>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <SectionLabel>Community</SectionLabel>
              <h2
                style={{
                  fontFamily: fonts.display,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 400,
                  color: colors.espresso,
                  margin: "16px 0",
                }}
              >
                Who This Work Is For
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Divider />
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div
              style={{
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontFamily: fonts.body,
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: colors.warmGray,
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                Makini&rsquo;s work supports:
              </p>
              <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
                {targetAudience.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: fonts.body,
                      fontSize: "15px",
                      lineHeight: 2.2,
                      color: colors.charcoal,
                    }}
                  >
                    <span style={{ color: colors.burntOrange, marginRight: "8px" }}>&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        </Container>
      </section>
    </div>
  );
};

export default ShopPage;
