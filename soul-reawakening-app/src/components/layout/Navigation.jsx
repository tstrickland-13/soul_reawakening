import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks';
import { colors, fonts } from '../../config/tokens';
import Container from '../ui/Container';

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Shop", path: "/shop" },
  { label: "Videos", path: "/videos" },
  { label: "Book", path: "/booking" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const scrolled = useScrollPosition(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(250,248,245,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${colors.sand}` : "1px solid transparent",
          transition: "all 0.4s ease",
          padding: scrolled ? "16px 0" : "24px 0",
        }}
      >
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link to="/" style={{ cursor: "pointer" }}>
            <span
              style={{
                fontFamily: fonts.display,
                fontSize: "22px",
                fontWeight: 400,
                letterSpacing: "1px",
                color: colors.espresso,
              }}
            >
              Soul <span style={{ fontStyle: "italic", color: colors.burntOrange }}>Reawakening</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="show-mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              width: "24px",
              height: "2px",
              background: colors.charcoal,
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              width: "24px",
              height: "2px",
              background: colors.charcoal,
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s ease",
            }} />
            <span style={{
              width: "24px",
              height: "2px",
              background: colors.charcoal,
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  fontFamily: fonts.body,
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: isActive(path) ? 600 : 400,
                  color: isActive(path) ? colors.burntOrange : colors.warmGray,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  borderBottom: isActive(path) ? `1px solid ${colors.burntOrange}` : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="show-mobile-only"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: colors.cream,
            zIndex: 999,
            paddingTop: "100px",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: fonts.display,
                  fontSize: "24px",
                  fontWeight: isActive(path) ? 500 : 400,
                  color: isActive(path) ? colors.burntOrange : colors.charcoal,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
