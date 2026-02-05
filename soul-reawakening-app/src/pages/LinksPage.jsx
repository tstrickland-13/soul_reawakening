import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { siteConfig, ownerInfo } from '../config/site';
import { quickLinks } from '../config/content';

const LinksPage = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.sandLight} 100%)`,
      padding: "40px 20px",
    }}
  >
    <SEO
      title="Links"
      description="Quick links to book, shop, watch, and connect with Soul Reawakening."
    />

    <div style={{ width: "100%", maxWidth: "420px", textAlign: "center" }}>
      {/* Profile */}
      <div className="animate-in" style={{ marginBottom: "32px" }}>
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: `linear-gradient(145deg, ${colors.taupe}, ${colors.gold})`,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: fonts.display,
            fontSize: "32px",
            color: colors.white,
            fontWeight: 300,
          }}
        >
          M
        </div>

        <h1
          style={{
            fontFamily: fonts.display,
            fontSize: "26px",
            fontWeight: 400,
            color: colors.espresso,
          }}
        >
          Soul <span style={{ fontStyle: "italic", color: colors.gold }}>Reawakening</span>
        </h1>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "13px",
            color: colors.warmGray,
            marginTop: "4px",
          }}
        >
          {ownerInfo.name}
        </p>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: "14px",
            fontStyle: "italic",
            color: colors.taupe,
            marginTop: "8px",
          }}
        >
          Holistic coaching for the soul ✧
        </p>
      </div>

      {/* Links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {quickLinks.map((link, i) => {
          const isExternal = link.external;
          const Component = isExternal ? "a" : Link;
          const linkProps = isExternal
            ? {
                href: siteConfig.social.youtubeUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : { to: link.path };

          return (
            <Component
              key={i}
              {...linkProps}
              className={`animate-in-delay-${Math.min(i + 1, 5)}`}
              style={{
                padding: "18px 24px",
                background: colors.warmWhite,
                border: `1px solid ${colors.sand}`,
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.gold;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
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
                  fontSize: "18px",
                  color: colors.gold,
                  width: "24px",
                }}
              >
                {link.icon}
              </span>
              <span
                style={{
                  fontFamily: fonts.body,
                  fontSize: "14px",
                  fontWeight: 500,
                  color: colors.charcoal,
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: fonts.body,
                  fontSize: "14px",
                  color: colors.taupe,
                }}
              >
                →
              </span>
            </Component>
          );
        })}
      </div>

      {/* Footer */}
      <div className="animate-in-delay-5" style={{ marginTop: "32px" }}>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "11px",
            color: colors.taupe,
            letterSpacing: "1px",
          }}
        >
          © {new Date().getFullYear()} Soul Reawakening
        </p>
      </div>
    </div>
  </div>
);

export default LinksPage;
