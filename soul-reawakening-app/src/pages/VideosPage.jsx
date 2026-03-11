import {
  Container,
  RevealSection,
  SectionLabel,
  SectionHeading,
  PageTitle,
  BodyText,
  Divider,
  Highlight,
} from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';
import { siteConfig } from '../config/site';
import useYouTubeVideos from '../hooks/useYouTubeVideos';

const VideosPage = () => {
  const { videos, loading, error } = useYouTubeVideos();

  return (
    <div style={{ paddingTop: "120px" }}>
      <SEO
        title="Videos"
        description="Explore conversations, guided practices, and insights from Makini's YouTube channel."
      />

      <section style={{ padding: "60px 0 100px" }}>
        <Container>
          <div className="animate-in" style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Videos</SectionLabel>
            <PageTitle>
              Watch & <Highlight>Learn</Highlight>
            </PageTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Divider />
            </div>
            <BodyText style={{ margin: "0 auto", textAlign: "center" }}>
              Explore conversations, guided practices, and insights from Makini's YouTube channel.
            </BodyText>
          </div>

          {/* Featured Playlist */}
          <RevealSection>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                background: colors.sand,
                marginBottom: "48px",
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
                title="Soul Reawakening Playlist"
                loading="lazy"
              />
            </div>
          </RevealSection>

          {/* Individual Videos from YouTube API */}
          {!loading && !error && videos.length > 0 && (
            <>
              <RevealSection delay={0.15}>
                <SectionHeading style={{ marginBottom: "32px" }}>More Videos</SectionHeading>
              </RevealSection>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                {videos.map((video) => (
                  <RevealSection key={video.id} delay={0.08}>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        cursor: "pointer",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "180px",
                          marginBottom: "12px",
                          overflow: "hidden",
                          background: colors.sand,
                        }}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          loading="lazy"
                        />
                      </div>
                      <h4
                        style={{
                          fontFamily: fonts.display,
                          fontSize: "18px",
                          fontWeight: 500,
                          color: colors.espresso,
                          marginTop: "4px",
                          lineHeight: 1.4,
                        }}
                      >
                        {video.title}
                      </h4>
                    </a>
                  </RevealSection>
                ))}
              </div>
            </>
          )}

          {/* Subscribe CTA */}
          <RevealSection delay={0.3}>
            <div
              style={{
                marginTop: "64px",
                padding: "48px",
                background: colors.espresso,
                textAlign: "center",
              }}
            >
              <SectionLabel>Subscribe</SectionLabel>
              <h3
                style={{
                  fontFamily: fonts.display,
                  fontSize: "28px",
                  fontWeight: 400,
                  color: colors.cream,
                  margin: "16px 0",
                }}
              >
                Never Miss an Episode
              </h3>
              <BodyText style={{ margin: "0 auto 24px", color: colors.taupeLight, textAlign: "center" }}>
                Subscribe to the Soul Reawakening YouTube channel for weekly inspiration.
              </BodyText>
              <a
                href={siteConfig.social.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "16px 40px",
                  background: colors.gold,
                  color: colors.white,
                  fontFamily: fonts.body,
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = colors.goldLight)}
                onMouseLeave={(e) => (e.currentTarget.style.background = colors.gold)}
              >
                Subscribe on YouTube
              </a>
            </div>
          </RevealSection>
        </Container>
      </section>
    </div>
  );
};

export default VideosPage;
