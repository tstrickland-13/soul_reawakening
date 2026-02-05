import { useState } from 'react';
import {
  Container,
  Button,
  RevealSection,
  PlaceholderImg,
  SectionLabel,
  PageTitle,
  BodyText,
  Divider,
  Highlight,
} from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { services } from '../config/content';

const ShopPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = ["all", "coaching", "workshops", "retreats", "books"];

  const filtered =
    activeFilter === "all" ? services : services.filter((p) => p.category === activeFilter);

  return (
    <div style={{ paddingTop: "120px" }}>
      <SEO
        title="Shop"
        description="Explore coaching packages, workshops, retreats, and resources designed to support your journey of healing and self-discovery."
      />

      <section style={{ padding: "60px 0 100px" }}>
        <Container>
          <div className="animate-in" style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Shop</SectionLabel>
            <PageTitle>
              Offerings & <Highlight>Services</Highlight>
            </PageTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
            <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
              Explore coaching packages, workshops, retreats, and resources designed to support your
              journey of healing and self-discovery.
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
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
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
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
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
                  {product.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: colors.gold,
                        color: colors.white,
                        fontFamily: fonts.body,
                        fontSize: "10px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        fontWeight: 600,
                        zIndex: 1,
                      }}
                    >
                      Featured
                    </div>
                  )}

                  <PlaceholderImg height="200px" text={product.category} />

                  <div style={{ padding: "28px" }}>
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
                      {product.duration ? ` · ${product.duration}` : ""}
                    </span>

                    <h3
                      style={{
                        fontFamily: fonts.display,
                        fontSize: "22px",
                        fontWeight: 500,
                        color: colors.espresso,
                        margin: "8px 0 12px",
                      }}
                    >
                      {product.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: fonts.body,
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: colors.warmGray,
                        marginBottom: "20px",
                      }}
                    >
                      {product.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: fonts.display,
                          fontSize: "24px",
                          fontWeight: 500,
                          color: colors.espresso,
                        }}
                      >
                        {product.price}
                      </span>
                      <Button to="/booking" style={{ padding: "10px 24px", fontSize: "11px" }}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ShopPage;
