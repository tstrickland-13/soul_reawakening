import { Link } from 'react-router-dom';
import { colors, fonts } from '../../config/tokens';
import { siteConfig } from '../../config/site';
import Container from '../ui/Container';

const Footer = () => {
  const linkStyle = {
    fontFamily: fonts.body,
    fontSize: "14px",
    color: colors.taupeLight,
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const handleHover = (e, isEnter) => {
    e.currentTarget.style.color = isEnter ? colors.cream : colors.taupeLight;
  };

  return (
    <footer style={{ background: colors.espresso, padding: "80px 0 40px" }}>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/logo.png" alt="Soul Reawakening" style={{ height: "48px", width: "auto" }} />
              <span
                style={{
                  fontFamily: fonts.display,
                  fontSize: "24px",
                  fontWeight: 400,
                  color: colors.cream,
                }}
              >
                Soul <span style={{ fontStyle: "italic", color: colors.burntOrange }}>Reawakening</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: fonts.body,
                fontSize: "13px",
                lineHeight: 1.8,
                color: colors.taupe,
                marginTop: "16px",
                maxWidth: "280px",
              }}
            >
              Holistic coaching and spiritual wellness with Makini C. Campbell.
              Guiding you back to your truest self.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: colors.burntOrange,
                fontWeight: 600,
              }}
            >
              Navigate
            </span>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Shop", path: "/shop" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: colors.burntOrange,
                fontWeight: 600,
              }}
            >
              Connect
            </span>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Videos", path: "/videos" },
                { label: "Book A Free Discovery Call", path: "/booking" },
                { label: "Contact", path: "/contact" },
                { label: "Quick Links", path: "/links" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: colors.burntOrange,
                fontWeight: 600,
              }}
            >
              Follow
            </span>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                YouTube
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={linkStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${colors.warmGray}33`,
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: fonts.body,
              fontSize: "12px",
              color: colors.warmGray,
            }}
          >
            © {new Date().getFullYear()} Soul Reawakening. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: fonts.body,
              fontSize: "11px",
              color: colors.warmGray,
              letterSpacing: "0.5px",
            }}
          >
            {siteConfig.location}
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
