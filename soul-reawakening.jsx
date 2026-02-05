import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   SOUL REAWAKENING — Full Website Scaffold
   Built for: Makini C. Campbell
   Stack: Next.js / React (rendered as single-page app for demo)
   Design: Clean Modern Minimalist
   ═══════════════════════════════════════════════════════════════ */

// ─── DESIGN TOKENS ─────────────────────────────────────────────
const tokens = {
  colors: {
    cream: "#FAF8F5",
    warmWhite: "#FEFDFB",
    sand: "#F0EBE3",
    sandLight: "#F5F1EC",
    taupe: "#C4B5A4",
    taupeLight: "#D9CEBF",
    warmGray: "#8A7E72",
    charcoal: "#3D3530",
    espresso: "#2A2320",
    gold: "#C4A265",
    goldLight: "#D4B97A",
    sage: "#9CAF93",
    sageLight: "#B5C4AE",
    roseDust: "#C9A9A6",
    white: "#FFFFFF",
  },
  fonts: {
    display: "'Cormorant Garamond', 'Georgia', serif",
    body: "'DM Sans', 'Helvetica Neue', sans-serif",
    accent: "'Cormorant', serif",
  },
};

// ─── GLOBAL STYLES ─────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: ${tokens.fonts.body};
      color: ${tokens.colors.charcoal};
      background: ${tokens.colors.cream};
      -webkit-font-smoothing: antialiased;
      line-height: 1.7;
    }

    ::selection {
      background: ${tokens.colors.gold};
      color: ${tokens.colors.white};
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gentlePulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    .animate-in { animation: fadeUp 0.7s ease-out forwards; }
    .animate-in-delay-1 { animation: fadeUp 0.7s ease-out 0.1s forwards; opacity: 0; }
    .animate-in-delay-2 { animation: fadeUp 0.7s ease-out 0.2s forwards; opacity: 0; }
    .animate-in-delay-3 { animation: fadeUp 0.7s ease-out 0.3s forwards; opacity: 0; }
    .animate-in-delay-4 { animation: fadeUp 0.7s ease-out 0.4s forwards; opacity: 0; }
    .animate-in-delay-5 { animation: fadeUp 0.7s ease-out 0.5s forwards; opacity: 0; }

    a { text-decoration: none; color: inherit; }

    img { max-width: 100%; display: block; }
  `}</style>
);

// ─── SCROLL OBSERVER HOOK ──────────────────────────────────────
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const RevealSection = ({ children, style = {}, delay = 0 }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ─── SHARED COMPONENTS ─────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <span style={{
    fontFamily: tokens.fonts.body,
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: tokens.colors.gold,
    fontWeight: 600,
  }}>{children}</span>
);

const SectionHeading = ({ children, style = {} }) => (
  <h2 style={{
    fontFamily: tokens.fonts.display,
    fontSize: "clamp(28px, 4vw, 46px)",
    fontWeight: 400,
    lineHeight: 1.2,
    color: tokens.colors.espresso,
    ...style,
  }}>{children}</h2>
);

const BodyText = ({ children, style = {} }) => (
  <p style={{
    fontFamily: tokens.fonts.body,
    fontSize: "15px",
    lineHeight: 1.8,
    color: tokens.colors.warmGray,
    maxWidth: "580px",
    ...style,
  }}>{children}</p>
);

const Divider = () => (
  <div style={{
    width: "48px",
    height: "1px",
    background: `linear-gradient(90deg, ${tokens.colors.gold}, ${tokens.colors.taupe})`,
    margin: "20px 0",
  }} />
);

const Button = ({ children, variant = "primary", onClick, style = {} }) => {
  const [hovered, setHovered] = useState(false);
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: tokens.fonts.body,
        fontSize: "12px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontWeight: 600,
        padding: isPrimary ? "16px 40px" : "14px 32px",
        border: isPrimary ? "none" : `1px solid ${tokens.colors.charcoal}`,
        borderRadius: "0",
        background: isPrimary
          ? hovered ? tokens.colors.espresso : tokens.colors.charcoal
          : hovered ? tokens.colors.charcoal : "transparent",
        color: isPrimary
          ? tokens.colors.cream
          : hovered ? tokens.colors.cream : tokens.colors.charcoal,
        cursor: "pointer",
        transition: "all 0.35s ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

const Container = ({ children, style = {} }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", ...style }}>
    {children}
  </div>
);

// Placeholder image component
const PlaceholderImg = ({ width = "100%", height = "400px", text = "Photo", style = {} }) => (
  <div style={{
    width, height, background: `linear-gradient(145deg, ${tokens.colors.sand}, ${tokens.colors.taupeLight})`,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: tokens.fonts.accent, fontSize: "14px", letterSpacing: "2px",
    color: tokens.colors.warmGray, textTransform: "uppercase",
    ...style,
  }}>
    {text}
  </div>
);

// ─── NAVIGATION ────────────────────────────────────────────────
const Navigation = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Shop", page: "shop" },
    { label: "Blog", page: "blog" },
    { label: "Videos", page: "videos" },
    { label: "Book", page: "booking" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(250,248,245,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${tokens.colors.sand}` : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: scrolled ? "16px 0" : "24px 0",
      }}>
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div
            onClick={() => { setPage("home"); window.scrollTo(0, 0); }}
            style={{ cursor: "pointer" }}
          >
            <span style={{
              fontFamily: tokens.fonts.display,
              fontSize: "22px",
              fontWeight: 400,
              letterSpacing: "1px",
              color: tokens.colors.espresso,
            }}>
              Soul <span style={{ fontStyle: "italic", color: tokens.colors.gold }}>Reawakening</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {navLinks.map(({ label, page }) => (
              <span
                key={page}
                onClick={() => { setPage(page); setMenuOpen(false); window.scrollTo(0, 0); }}
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: currentPage === page ? 600 : 400,
                  color: currentPage === page ? tokens.colors.gold : tokens.colors.warmGray,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  borderBottom: currentPage === page ? `1px solid ${tokens.colors.gold}` : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </Container>
      </nav>
    </>
  );
};

// ═══════════════════════════════════════════════════════════════
// PAGE: HOME
// ═══════════════════════════════════════════════════════════════
const HomePage = ({ setPage }) => (
  <div>
    {/* HERO */}
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      background: `linear-gradient(180deg, ${tokens.colors.cream} 0%, ${tokens.colors.sandLight} 50%, ${tokens.colors.cream} 100%)`,
      overflow: "hidden",
    }}>
      {/* Subtle background orb */}
      <div style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${tokens.colors.gold}08 0%, transparent 70%)`,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "gentlePulse 6s ease-in-out infinite",
      }} />

      <Container style={{ textAlign: "center", position: "relative", zIndex: 1, paddingTop: "100px" }}>
        <div className="animate-in">
          <SectionLabel>Welcome to</SectionLabel>
        </div>

        <h1 className="animate-in-delay-1" style={{
          fontFamily: tokens.fonts.display,
          fontSize: "clamp(42px, 7vw, 82px)",
          fontWeight: 300,
          lineHeight: 1.1,
          color: tokens.colors.espresso,
          margin: "20px 0 12px",
          letterSpacing: "-1px",
        }}>
          Soul <span style={{ fontStyle: "italic", fontWeight: 400, color: tokens.colors.gold }}>Reawakening</span>
        </h1>

        <p className="animate-in-delay-2" style={{
          fontFamily: tokens.fonts.accent,
          fontSize: "clamp(18px, 2.5vw, 24px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: tokens.colors.warmGray,
          marginBottom: "12px",
          letterSpacing: "0.5px",
        }}>
          with Makini C. Campbell
        </p>

        <Divider />

        <p className="animate-in-delay-3" style={{
          fontFamily: tokens.fonts.body,
          fontSize: "16px",
          color: tokens.colors.warmGray,
          maxWidth: "520px",
          margin: "0 auto 40px",
          lineHeight: 1.8,
        }}>
          Guiding you back to your truest self through holistic coaching,
          mindful practices, and the transformative power of spiritual renewal.
        </p>

        <div className="animate-in-delay-4" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}>Explore Services</Button>
          <Button variant="outline" onClick={() => { setPage("booking"); window.scrollTo(0, 0); }}>Book a Session</Button>
        </div>
      </Container>
    </section>

    {/* ABOUT PREVIEW */}
    <section style={{ padding: "120px 0" }}>
      <Container style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <RevealSection>
          <PlaceholderImg height="520px" text="Makini's Photo" style={{ borderRadius: "0" }} />
        </RevealSection>

        <RevealSection delay={0.15}>
          <SectionLabel>About Makini</SectionLabel>
          <SectionHeading style={{ margin: "16px 0" }}>A Journey of Healing & Transformation</SectionHeading>
          <Divider />
          <BodyText>
            Makini C. Campbell is a holistic wellness coach, educator, and guide dedicated to helping
            individuals reconnect with their inner power. Through a unique blend of spiritual practices,
            evidence-based coaching, and whole-person support, she creates safe spaces for deep
            transformation.
          </BodyText>
          <BodyText style={{ marginTop: "16px" }}>
            Whether you're navigating life transitions, seeking clarity, or ready to step
            into your fullest potential — your journey starts here.
          </BodyText>
          <div style={{ marginTop: "32px" }}>
            <Button variant="outline" onClick={() => { setPage("about"); window.scrollTo(0, 0); }}>Read My Story →</Button>
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* SERVICES PREVIEW */}
    <section style={{ padding: "100px 0", background: tokens.colors.warmWhite }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Offerings</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>How We Can Work Together</SectionHeading>
            <Divider />
          </div>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {[
            { title: "1:1 Coaching", desc: "Personalized sessions to guide you through your unique journey of self-discovery and healing.", icon: "✧" },
            { title: "Workshops", desc: "Group experiences designed to build community, expand awareness, and cultivate inner peace.", icon: "◈" },
            { title: "Retreats", desc: "Immersive getaways that create space for deep reflection, renewal, and spiritual connection.", icon: "◇" },
          ].map((item, i) => (
            <RevealSection key={i} delay={i * 0.12}>
              <div style={{
                padding: "48px 36px",
                background: tokens.colors.cream,
                border: `1px solid ${tokens.colors.sand}`,
                textAlign: "center",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tokens.colors.gold;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tokens.colors.sand;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: "32px",
                  color: tokens.colors.gold,
                  display: "block",
                  marginBottom: "20px",
                }}>{item.icon}</span>
                <h3 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: "24px",
                  fontWeight: 500,
                  marginBottom: "16px",
                  color: tokens.colors.espresso,
                }}>{item.title}</h3>
                <BodyText style={{ margin: "0 auto", fontSize: "14px" }}>{item.desc}</BodyText>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Button onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}>View All Offerings</Button>
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
            <Divider />
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            background: tokens.colors.sand,
            border: `1px solid ${tokens.colors.sand}`,
          }}>
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLnuFcIyG2-BY2Hir1qtpzBLr0q-f7-_ja"
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
            />
          </div>
        </RevealSection>

        <RevealSection delay={0.25}>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Button variant="outline" onClick={() => { setPage("videos"); window.scrollTo(0, 0); }}>Watch More Videos →</Button>
          </div>
        </RevealSection>
      </Container>
    </section>

    {/* TESTIMONIALS */}
    <section style={{ padding: "100px 0", background: tokens.colors.espresso }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Testimonials</SectionLabel>
            <SectionHeading style={{ margin: "16px 0", color: tokens.colors.cream }}>Words from the Community</SectionHeading>
            <div style={{ width: "48px", height: "1px", background: tokens.colors.gold, margin: "20px auto" }} />
          </div>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {[
            { quote: "Working with Makini was a turning point in my life. She helped me see myself clearly for the first time in years.", name: "— Client Testimonial", },
            { quote: "The retreat experience was absolutely transformative. I left feeling renewed, grounded, and full of purpose.", name: "— Client Testimonial", },
            { quote: "Makini has a gift for holding space. Her coaching is both gentle and powerful — exactly what I needed.", name: "— Client Testimonial", },
          ].map((t, i) => (
            <RevealSection key={i} delay={i * 0.12}>
              <div style={{
                padding: "40px 32px",
                borderLeft: `2px solid ${tokens.colors.gold}`,
              }}>
                <p style={{
                  fontFamily: tokens.fonts.accent,
                  fontSize: "18px",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  color: tokens.colors.taupeLight,
                  marginBottom: "20px",
                }}>"{t.quote}"</p>
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: tokens.colors.gold,
                }}>{t.name}</span>
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>

    {/* EMAIL SIGNUP */}
    <section style={{ padding: "100px 0", background: tokens.colors.sandLight }}>
      <Container>
        <RevealSection>
          <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto" }}>
            <SectionLabel>Stay Connected</SectionLabel>
            <SectionHeading style={{ margin: "16px 0" }}>Join the Journey</SectionHeading>
            <Divider />
            <BodyText style={{ margin: "0 auto 32px", textAlign: "center" }}>
              Receive reflections, updates on upcoming workshops and retreats,
              and gentle reminders to nurture your soul.
            </BodyText>

            <div style={{ display: "flex", gap: "0", maxWidth: "480px", margin: "0 auto" }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  fontFamily: tokens.fonts.body,
                  fontSize: "14px",
                  border: `1px solid ${tokens.colors.taupe}`,
                  borderRight: "none",
                  background: tokens.colors.white,
                  outline: "none",
                  color: tokens.colors.charcoal,
                }}
              />
              <Button style={{ borderRadius: 0 }}>Subscribe</Button>
            </div>

            <p style={{
              fontFamily: tokens.fonts.body,
              fontSize: "11px",
              color: tokens.colors.taupe,
              marginTop: "12px",
            }}>No spam, ever. Unsubscribe anytime.</p>
          </div>
        </RevealSection>
      </Container>
    </section>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// PAGE: ABOUT
// ═══════════════════════════════════════════════════════════════
const AboutPage = () => (
  <div style={{ paddingTop: "120px" }}>
    {/* Hero */}
    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>About</SectionLabel>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            color: tokens.colors.espresso,
            margin: "16px 0",
          }}>
            Meet <span style={{ fontStyle: "italic", fontWeight: 400 }}>Makini</span>
          </h1>
          <Divider />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "80px", alignItems: "start" }}>
          <RevealSection>
            <PlaceholderImg height="600px" text="Makini Portrait" />
          </RevealSection>

          <RevealSection delay={0.15}>
            <p style={{
              fontFamily: tokens.fonts.accent,
              fontSize: "22px",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: tokens.colors.warmGray,
              marginBottom: "32px",
            }}>
              "I believe that within every person lies an extraordinary capacity for healing,
              growth, and transformation. My work is simply to help you remember."
            </p>

            <BodyText>
              Makini C. Campbell is a holistic wellness coach, educator, and spiritual guide
              based in Brooklyn, New York. With a deep commitment to whole-person well-being,
              she supports individuals through life's most pivotal transitions — helping them
              rediscover their inner wisdom, reclaim their power, and build lives rooted in
              authenticity and purpose.
            </BodyText>

            <BodyText style={{ marginTop: "20px" }}>
              As the founder of Soul Reawakening, Makini draws on a rich tapestry of
              experience — from evidence-based coaching methodologies to spiritual practices
              that honor the whole self. Her approach is warm, intuitive, and grounded,
              creating a safe container for profound personal transformation.
            </BodyText>

            <BodyText style={{ marginTop: "20px" }}>
              Her work extends into the world of athletics, where she provides practical
              coaching support for parents navigating the unique pressures of raising
              student-athletes — helping families thrive without sacrificing well-being.
            </BodyText>

            <div style={{
              marginTop: "40px",
              padding: "32px",
              background: tokens.colors.sandLight,
              borderLeft: `3px solid ${tokens.colors.gold}`,
            }}>
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: tokens.colors.gold,
                fontWeight: 600,
              }}>Areas of Focus</span>
              <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Holistic Wellness", "Spiritual Coaching", "Life Transitions", "Mindfulness", "Athlete Parent Support", "Workshop Facilitation", "Retreat Design"].map((tag, i) => (
                  <span key={i} style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: "12px",
                    padding: "6px 16px",
                    border: `1px solid ${tokens.colors.taupe}`,
                    color: tokens.colors.warmGray,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// PAGE: SHOP
// ═══════════════════════════════════════════════════════════════
const ShopPage = ({ setPage }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = ["all", "coaching", "workshops", "retreats", "books"];

  const products = [
    { id: 1, title: "Soul Discovery Session", category: "coaching", price: "$150", duration: "60 min", desc: "A deep-dive introductory session to explore your goals, challenges, and path forward.", featured: true },
    { id: 2, title: "Transformative Coaching Package", category: "coaching", price: "$500", duration: "4 sessions", desc: "A four-session journey designed for lasting change. Includes personalized exercises and ongoing support." },
    { id: 3, title: "Parent-Athlete Coaching", category: "coaching", price: "$175", duration: "60 min", desc: "Specialized support for parents navigating the pressures and joys of raising student-athletes." },
    { id: 4, title: "Awakening Workshop", category: "workshops", price: "$75", duration: "Half-day", desc: "A group workshop exploring mindfulness techniques, self-reflection, and community connection." },
    { id: 5, title: "Mindful Parenting Workshop", category: "workshops", price: "$65", duration: "2 hours", desc: "Tools and practices for parents seeking balance, presence, and deeper connection with their children." },
    { id: 6, title: "Soul Renewal Retreat", category: "retreats", price: "$1,200", duration: "Weekend", desc: "An immersive weekend retreat in nature. Includes lodging, meals, guided sessions, and integration support.", featured: true },
    { id: 7, title: "The Reawakening Journal", category: "books", price: "$28", duration: "", desc: "A guided journal for daily reflection, intention-setting, and spiritual growth." },
    { id: 8, title: "Finding Your Way Back", category: "books", price: "$22", duration: "", desc: "Makini's guide to navigating life transitions with grace, courage, and inner wisdom." },
  ];

  const filtered = activeFilter === "all" ? products : products.filter(p => p.category === activeFilter);

  return (
    <div style={{ paddingTop: "120px" }}>
      <section style={{ padding: "60px 0 100px" }}>
        <Container>
          <div className="animate-in" style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Shop</SectionLabel>
            <h1 style={{
              fontFamily: tokens.fonts.display,
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              color: tokens.colors.espresso,
              margin: "16px 0",
            }}>
              Offerings & <span style={{ fontStyle: "italic" }}>Services</span>
            </h1>
            <Divider />
            <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
              Explore coaching packages, workshops, retreats, and resources designed
              to support your journey of healing and self-discovery.
            </BodyText>
          </div>

          {/* Filters */}
          <div className="animate-in-delay-1" style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "48px", flexWrap: "wrap" }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "12px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "10px 24px",
                  border: `1px solid ${activeFilter === f ? tokens.colors.charcoal : tokens.colors.taupe}`,
                  background: activeFilter === f ? tokens.colors.charcoal : "transparent",
                  color: activeFilter === f ? tokens.colors.cream : tokens.colors.warmGray,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >{f}</button>
            ))}
          </div>

          {/* Products Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {filtered.map((product, i) => (
              <RevealSection key={product.id} delay={i * 0.08}>
                <div style={{
                  border: `1px solid ${tokens.colors.sand}`,
                  background: tokens.colors.warmWhite,
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = tokens.colors.gold;
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = tokens.colors.sand;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {product.featured && (
                    <div style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: tokens.colors.gold,
                      color: tokens.colors.white,
                      fontFamily: tokens.fonts.body,
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      fontWeight: 600,
                    }}>Featured</div>
                  )}

                  <PlaceholderImg height="200px" text={product.category} />

                  <div style={{ padding: "28px" }}>
                    <span style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: tokens.colors.gold,
                      fontWeight: 600,
                    }}>{product.category}{product.duration ? ` · ${product.duration}` : ""}</span>

                    <h3 style={{
                      fontFamily: tokens.fonts.display,
                      fontSize: "22px",
                      fontWeight: 500,
                      color: tokens.colors.espresso,
                      margin: "8px 0 12px",
                    }}>{product.title}</h3>

                    <p style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: "13px",
                      lineHeight: 1.7,
                      color: tokens.colors.warmGray,
                      marginBottom: "20px",
                    }}>{product.desc}</p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{
                        fontFamily: tokens.fonts.display,
                        fontSize: "24px",
                        fontWeight: 500,
                        color: tokens.colors.espresso,
                      }}>{product.price}</span>
                      <Button style={{ padding: "10px 24px", fontSize: "11px" }}>Add to Cart</Button>
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

// ═══════════════════════════════════════════════════════════════
// PAGE: BLOG
// ═══════════════════════════════════════════════════════════════
const BlogPage = () => {
  const posts = [
    { title: "The Art of Coming Home to Yourself", date: "February 2026", category: "Reflection", excerpt: "In the quiet moments between the noise of our daily lives, there exists an invitation — a gentle call to return to the person we've always been beneath the layers." },
    { title: "5 Practices for Parents of Athletes", date: "January 2026", category: "Athlete Families", excerpt: "Raising a student-athlete comes with unique joys and pressures. Here are five grounding practices to help you stay centered while supporting your child's journey." },
    { title: "What Spiritual Awakening Actually Looks Like", date: "January 2026", category: "Spirituality", excerpt: "It's not always light and bliss. Sometimes awakening looks like confusion, grief, or simply learning to sit with discomfort. Here's what nobody tells you." },
    { title: "Setting Boundaries with Love", date: "December 2025", category: "Wellness", excerpt: "Boundaries aren't walls — they're bridges to deeper, more honest relationships. Learn how to set them without guilt." },
    { title: "The Power of Rest in a Culture of Hustle", date: "December 2025", category: "Reflection", excerpt: "We've been conditioned to equate rest with laziness. But what if rest is the most radical act of self-love you can practice?" },
    { title: "A Letter to My Younger Self", date: "November 2025", category: "Personal", excerpt: "If I could go back and tell her one thing, it would be this: everything you're looking for is already within you." },
  ];

  return (
    <div style={{ paddingTop: "120px" }}>
      <section style={{ padding: "60px 0 100px" }}>
        <Container>
          <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Blog</SectionLabel>
            <h1 style={{
              fontFamily: tokens.fonts.display,
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              color: tokens.colors.espresso,
              margin: "16px 0",
            }}>
              Reflections & <span style={{ fontStyle: "italic" }}>Writings</span>
            </h1>
            <Divider />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {posts.map((post, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <article style={{
                  padding: "40px",
                  background: i === 0 ? tokens.colors.espresso : tokens.colors.warmWhite,
                  border: i === 0 ? "none" : `1px solid ${tokens.colors.sand}`,
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
                      e.currentTarget.style.borderColor = tokens.colors.gold;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (i !== 0) {
                      e.currentTarget.style.borderColor = tokens.colors.sand;
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {i === 0 && <PlaceholderImg height="280px" text="Featured Image" style={{ background: `linear-gradient(145deg, ${tokens.colors.warmGray}, ${tokens.colors.taupe})` }} />}

                  <div>
                    <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                      <span style={{
                        fontFamily: tokens.fonts.body,
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: i === 0 ? tokens.colors.gold : tokens.colors.gold,
                        fontWeight: 600,
                      }}>{post.category}</span>
                      <span style={{
                        fontFamily: tokens.fonts.body,
                        fontSize: "10px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: i === 0 ? tokens.colors.taupe : tokens.colors.taupe,
                      }}>{post.date}</span>
                    </div>

                    <h3 style={{
                      fontFamily: tokens.fonts.display,
                      fontSize: i === 0 ? "32px" : "24px",
                      fontWeight: 500,
                      color: i === 0 ? tokens.colors.cream : tokens.colors.espresso,
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}>{post.title}</h3>

                    <p style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: i === 0 ? tokens.colors.taupeLight : tokens.colors.warmGray,
                    }}>{post.excerpt}</p>

                    <span style={{
                      fontFamily: tokens.fonts.body,
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: tokens.colors.gold,
                      marginTop: "16px",
                      display: "inline-block",
                      borderBottom: `1px solid ${tokens.colors.gold}`,
                      paddingBottom: "2px",
                    }}>Read More →</span>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// PAGE: VIDEOS (YouTube)
// ═══════════════════════════════════════════════════════════════
const VideosPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>Videos</SectionLabel>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            color: tokens.colors.espresso,
            margin: "16px 0",
          }}>
            Watch & <span style={{ fontStyle: "italic" }}>Learn</span>
          </h1>
          <Divider />
          <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
            Explore conversations, guided practices, and insights from
            Makini's YouTube channel.
          </BodyText>
        </div>

        {/* Featured Video */}
        <RevealSection>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            background: tokens.colors.sand,
            marginBottom: "48px",
          }}>
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLnuFcIyG2-BY2Hir1qtpzBLr0q-f7-_ja"
              style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%", border: "none",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Soul Reawakening Playlist"
            />
          </div>
        </RevealSection>

        {/* Video Grid Placeholders */}
        <RevealSection delay={0.15}>
          <h3 style={{
            fontFamily: tokens.fonts.display,
            fontSize: "28px",
            fontWeight: 400,
            color: tokens.colors.espresso,
            marginBottom: "32px",
          }}>More Videos</h3>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <RevealSection key={i} delay={i * 0.08}>
              <div style={{ cursor: "pointer" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <PlaceholderImg height="180px" text={`Video ${n}`} style={{
                  background: `linear-gradient(145deg, ${tokens.colors.sand}, ${tokens.colors.taupeLight})`,
                  marginBottom: "12px",
                  transition: "transform 0.3s ease",
                  position: "relative",
                }} />
                <span style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: tokens.colors.gold,
                  fontWeight: 600,
                }}>Episode {n}</span>
                <h4 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: "18px",
                  fontWeight: 500,
                  color: tokens.colors.espresso,
                  marginTop: "4px",
                }}>Video Title Placeholder</h4>
              </div>
            </RevealSection>
          ))}
        </div>
      </Container>
    </section>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// PAGE: BOOKING (Calendly)
// ═══════════════════════════════════════════════════════════════
const BookingPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "48px" }}>
          <SectionLabel>Book a Session</SectionLabel>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            color: tokens.colors.espresso,
            margin: "16px 0",
          }}>
            Schedule Your <span style={{ fontStyle: "italic" }}>Time</span>
          </h1>
          <Divider />
          <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
            Ready to begin? Choose a time that works for you. Whether it's an
            introductory session or a follow-up — I'm here to support your journey.
          </BodyText>
        </div>

        <RevealSection>
          <div style={{
            border: `1px solid ${tokens.colors.sand}`,
            background: tokens.colors.warmWhite,
            padding: "24px",
            minHeight: "680px",
          }}>
            <iframe
              src="https://calendly.com/soulreawakening?hide_gdpr_banner=1"
              style={{
                width: "100%",
                height: "640px",
                border: "none",
                minHeight: "640px",
              }}
              title="Book a Session with Makini"
            />
          </div>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div style={{
            marginTop: "48px",
            padding: "40px",
            background: tokens.colors.sandLight,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            textAlign: "center",
          }}>
            {[
              { icon: "✧", title: "Choose Your Session", desc: "Browse available session types and select what resonates with your needs." },
              { icon: "◈", title: "Pick a Time", desc: "Find a slot that works with your schedule. All sessions are conducted virtually." },
              { icon: "◇", title: "Show Up as You Are", desc: "No preparation needed. Come with an open heart and a willingness to explore." },
            ].map((step, i) => (
              <div key={i}>
                <span style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: "28px",
                  color: tokens.colors.gold,
                  display: "block",
                  marginBottom: "12px",
                }}>{step.icon}</span>
                <h4 style={{
                  fontFamily: tokens.fonts.display,
                  fontSize: "18px",
                  fontWeight: 500,
                  color: tokens.colors.espresso,
                  marginBottom: "8px",
                }}>{step.title}</h4>
                <p style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "13px",
                  color: tokens.colors.warmGray,
                  lineHeight: 1.7,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </Container>
    </section>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// PAGE: CONTACT
// ═══════════════════════════════════════════════════════════════
const ContactPage = () => (
  <div style={{ paddingTop: "120px" }}>
    <section style={{ padding: "60px 0 100px" }}>
      <Container>
        <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
          <SectionLabel>Contact</SectionLabel>
          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 300,
            color: tokens.colors.espresso,
            margin: "16px 0",
          }}>
            Let's <span style={{ fontStyle: "italic" }}>Connect</span>
          </h1>
          <Divider />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
          <RevealSection>
            <div>
              <h3 style={{
                fontFamily: tokens.fonts.display,
                fontSize: "28px",
                fontWeight: 400,
                color: tokens.colors.espresso,
                marginBottom: "20px",
              }}>Get in Touch</h3>

              <BodyText>
                Have a question about coaching, an upcoming workshop, or a collaboration?
                I'd love to hear from you. Fill out the form or reach out directly — every
                message is read with care.
              </BodyText>

              <div style={{ marginTop: "40px" }}>
                {[
                  { label: "Email", value: "hello@soulreawakening.com", icon: "✉" },
                  { label: "Instagram", value: "@soulreawakening", icon: "◎" },
                  { label: "YouTube", value: "Soul Reawakening", icon: "▶" },
                  { label: "Location", value: "Brooklyn, New York", icon: "◈" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: `1px solid ${tokens.colors.sand}`,
                  }}>
                    <span style={{
                      fontFamily: tokens.fonts.display,
                      fontSize: "18px",
                      color: tokens.colors.gold,
                      width: "28px",
                    }}>{item.icon}</span>
                    <div>
                      <span style={{
                        fontFamily: tokens.fonts.body,
                        fontSize: "10px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: tokens.colors.taupe,
                      }}>{item.label}</span>
                      <p style={{
                        fontFamily: tokens.fonts.body,
                        fontSize: "15px",
                        color: tokens.colors.charcoal,
                      }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.15}>
            <div style={{
              background: tokens.colors.warmWhite,
              border: `1px solid ${tokens.colors.sand}`,
              padding: "48px",
            }}>
              {[
                { label: "Name", type: "text", placeholder: "Your full name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
                { label: "Subject", type: "text", placeholder: "What's this about?" },
              ].map((field, i) => (
                <div key={i} style={{ marginBottom: "24px" }}>
                  <label style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: tokens.colors.warmGray,
                    display: "block",
                    marginBottom: "8px",
                  }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      fontFamily: tokens.fonts.body,
                      fontSize: "14px",
                      border: `1px solid ${tokens.colors.sand}`,
                      background: tokens.colors.cream,
                      outline: "none",
                      color: tokens.colors.charcoal,
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => e.target.style.borderColor = tokens.colors.gold}
                    onBlur={(e) => e.target.style.borderColor = tokens.colors.sand}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "24px" }}>
                <label style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: tokens.colors.warmGray,
                  display: "block",
                  marginBottom: "8px",
                }}>Message</label>
                <textarea
                  placeholder="Tell me what's on your heart..."
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontFamily: tokens.fonts.body,
                    fontSize: "14px",
                    border: `1px solid ${tokens.colors.sand}`,
                    background: tokens.colors.cream,
                    outline: "none",
                    color: tokens.colors.charcoal,
                    resize: "vertical",
                    lineHeight: 1.7,
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => e.target.style.borderColor = tokens.colors.gold}
                  onBlur={(e) => e.target.style.borderColor = tokens.colors.sand}
                />
              </div>

              <Button style={{ width: "100%" }}>Send Message</Button>
            </div>
          </RevealSection>
        </div>
      </Container>
    </section>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// PAGE: LINKS (Instagram Linktree Replacement)
// ═══════════════════════════════════════════════════════════════
const LinksPage = ({ setPage }) => {
  const links = [
    { label: "Book a Session", icon: "✧", action: () => { setPage("booking"); window.scrollTo(0, 0); } },
    { label: "Shop Coaching & Workshops", icon: "◈", action: () => { setPage("shop"); window.scrollTo(0, 0); } },
    { label: "Watch on YouTube", icon: "▶", url: "https://youtube.com/playlist?list=PLnuFcIyG2-BY2Hir1qtpzBLr0q-f7-_ja" },
    { label: "Read the Blog", icon: "✎", action: () => { setPage("blog"); window.scrollTo(0, 0); } },
    { label: "About Makini", icon: "◇", action: () => { setPage("about"); window.scrollTo(0, 0); } },
    { label: "Contact Me", icon: "✉", action: () => { setPage("contact"); window.scrollTo(0, 0); } },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(180deg, ${tokens.colors.cream} 0%, ${tokens.colors.sandLight} 100%)`,
      padding: "40px 20px",
    }}>
      <div style={{ width: "100%", maxWidth: "420px", textAlign: "center" }}>
        {/* Profile */}
        <div className="animate-in" style={{ marginBottom: "32px" }}>
          <div style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: `linear-gradient(145deg, ${tokens.colors.taupe}, ${tokens.colors.gold})`,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: tokens.fonts.display,
            fontSize: "32px",
            color: tokens.colors.white,
            fontWeight: 300,
          }}>M</div>

          <h1 style={{
            fontFamily: tokens.fonts.display,
            fontSize: "26px",
            fontWeight: 400,
            color: tokens.colors.espresso,
          }}>
            Soul <span style={{ fontStyle: "italic", color: tokens.colors.gold }}>Reawakening</span>
          </h1>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: "13px",
            color: tokens.colors.warmGray,
            marginTop: "4px",
          }}>Makini C. Campbell</p>
          <p style={{
            fontFamily: tokens.fonts.accent,
            fontSize: "14px",
            fontStyle: "italic",
            color: tokens.colors.taupe,
            marginTop: "8px",
          }}>Holistic coaching for the soul ✧</p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {links.map((link, i) => (
            <div
              key={i}
              className={`animate-in-delay-${Math.min(i + 1, 5)}`}
              onClick={link.action || (() => window.open(link.url, "_blank"))}
              style={{
                padding: "18px 24px",
                background: tokens.colors.warmWhite,
                border: `1px solid ${tokens.colors.sand}`,
                display: "flex",
                alignItems: "center",
                gap: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tokens.colors.gold;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = tokens.colors.sand;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{
                fontFamily: tokens.fonts.display,
                fontSize: "18px",
                color: tokens.colors.gold,
                width: "24px",
              }}>{link.icon}</span>
              <span style={{
                fontFamily: tokens.fonts.body,
                fontSize: "14px",
                fontWeight: 500,
                color: tokens.colors.charcoal,
              }}>{link.label}</span>
              <span style={{
                marginLeft: "auto",
                fontFamily: tokens.fonts.body,
                fontSize: "14px",
                color: tokens.colors.taupe,
              }}>→</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="animate-in-delay-5" style={{ marginTop: "32px" }}>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: "11px",
            color: tokens.colors.taupe,
            letterSpacing: "1px",
          }}>© 2026 Soul Reawakening</p>
        </div>
      </div>
    </div>
  );
};

// ─── FOOTER ────────────────────────────────────────────────────
const Footer = ({ setPage }) => (
  <footer style={{
    background: tokens.colors.espresso,
    padding: "80px 0 40px",
  }}>
    <Container>
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "48px",
        marginBottom: "60px",
      }}>
        {/* Brand */}
        <div>
          <span style={{
            fontFamily: tokens.fonts.display,
            fontSize: "24px",
            fontWeight: 400,
            color: tokens.colors.cream,
          }}>
            Soul <span style={{ fontStyle: "italic", color: tokens.colors.gold }}>Reawakening</span>
          </span>
          <p style={{
            fontFamily: tokens.fonts.body,
            fontSize: "13px",
            lineHeight: 1.8,
            color: tokens.colors.taupe,
            marginTop: "16px",
            maxWidth: "280px",
          }}>
            Holistic coaching and spiritual wellness with Makini C. Campbell.
            Guiding you back to your truest self.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: tokens.colors.gold,
            fontWeight: 600,
          }}>Navigate</span>
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Home", "About", "Shop", "Blog"].map((item) => (
              <span
                key={item}
                onClick={() => { setPage(item.toLowerCase()); window.scrollTo(0, 0); }}
                style={{
                  fontFamily: tokens.fonts.body,
                  fontSize: "14px",
                  color: tokens.colors.taupeLight,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => e.target.style.color = tokens.colors.cream}
                onMouseLeave={(e) => e.target.style.color = tokens.colors.taupeLight}
              >{item}</span>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: tokens.colors.gold,
            fontWeight: 600,
          }}>Connect</span>
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Videos", "Book a Session", "Contact", "Instagram Links"].map((item) => {
              const pageMap = { "Videos": "videos", "Book a Session": "booking", "Contact": "contact", "Instagram Links": "links" };
              return (
                <span
                  key={item}
                  onClick={() => { setPage(pageMap[item]); window.scrollTo(0, 0); }}
                  style={{
                    fontFamily: tokens.fonts.body,
                    fontSize: "14px",
                    color: tokens.colors.taupeLight,
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.target.style.color = tokens.colors.cream}
                  onMouseLeave={(e) => e.target.style.color = tokens.colors.taupeLight}
                >{item}</span>
              );
            })}
          </div>
        </div>

        {/* Social */}
        <div>
          <span style={{
            fontFamily: tokens.fonts.body,
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: tokens.colors.gold,
            fontWeight: 600,
          }}>Follow</span>
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Instagram", "YouTube", "Email"].map((item) => (
              <span key={item} style={{
                fontFamily: tokens.fonts.body,
                fontSize: "14px",
                color: tokens.colors.taupeLight,
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
                onMouseEnter={(e) => e.target.style.color = tokens.colors.cream}
                onMouseLeave={(e) => e.target.style.color = tokens.colors.taupeLight}
              >{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: `1px solid ${tokens.colors.warmGray}33`,
        paddingTop: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontFamily: tokens.fonts.body,
          fontSize: "12px",
          color: tokens.colors.warmGray,
        }}>© 2026 Soul Reawakening. All rights reserved.</span>
        <span style={{
          fontFamily: tokens.fonts.body,
          fontSize: "11px",
          color: tokens.colors.warmGray,
          letterSpacing: "0.5px",
        }}>Designed with ♡</span>
      </div>
    </Container>
  </footer>
);

// ═══════════════════════════════════════════════════════════════
// APP ROOT
// ═══════════════════════════════════════════════════════════════
export default function SoulReawakening() {
  const [currentPage, setPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage setPage={setPage} />;
      case "about": return <AboutPage />;
      case "shop": return <ShopPage setPage={setPage} />;
      case "blog": return <BlogPage />;
      case "videos": return <VideosPage />;
      case "booking": return <BookingPage />;
      case "contact": return <ContactPage />;
      case "links": return <LinksPage setPage={setPage} />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  const showNav = currentPage !== "links";
  const showFooter = currentPage !== "links";

  return (
    <div>
      <GlobalStyles />
      {showNav && <Navigation currentPage={currentPage} setPage={setPage} />}
      {renderPage()}
      {showFooter && <Footer setPage={setPage} />}
    </div>
  );
}
