import { Link } from 'react-router-dom';
import {
  Container,
  RevealSection,
  PlaceholderImg,
  SectionLabel,
  PageTitle,
  Divider,
  Highlight,
} from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { blogPosts } from '../config/content';

const BlogPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <SEO
      title="Blog"
      description="Reflections, insights, and guidance for your journey of healing and self-discovery."
    />

    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>Blog</SectionLabel>
          <PageTitle>
            Reflections & <Highlight>Writings</Highlight>
          </PageTitle>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "32px",
          }}
        >
          {blogPosts.map((post, i) => (
            <RevealSection key={post.id} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} style={{ display: "block" }}>
                <article
                  style={{
                    padding: "40px",
                    background: i === 0 ? colors.espresso : colors.warmWhite,
                    border: i === 0 ? "none" : `1px solid ${colors.sand}`,
                    gridColumn: i === 0 ? "span 2" : "span 1",
                    display: i === 0 ? "grid" : "block",
                    gridTemplateColumns: i === 0 ? "1fr 1fr" : "1fr",
                    gap: "40px",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (i !== 0) {
                      e.currentTarget.style.borderColor = colors.gold;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== 0) {
                      e.currentTarget.style.borderColor = colors.sand;
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {i === 0 && (
                    <PlaceholderImg
                      height="280px"
                      text="Featured Image"
                      style={{
                        background: `linear-gradient(145deg, ${colors.warmGray}, ${colors.taupe})`,
                      }}
                    />
                  )}

                  <div>
                    <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
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
                        {post.category}
                      </span>
                      <span
                        style={{
                          fontFamily: fonts.body,
                          fontSize: "10px",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: colors.taupe,
                        }}
                      >
                        {post.date}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: fonts.display,
                        fontSize: i === 0 ? "32px" : "24px",
                        fontWeight: 500,
                        color: i === 0 ? colors.cream : colors.espresso,
                        marginBottom: "12px",
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: fonts.body,
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: i === 0 ? colors.taupeLight : colors.warmGray,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <span
                      style={{
                        fontFamily: fonts.body,
                        fontSize: "12px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: colors.gold,
                        marginTop: "16px",
                        display: "inline-block",
                        borderBottom: `1px solid ${colors.gold}`,
                        paddingBottom: "2px",
                      }}
                    >
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

export default BlogPage;
