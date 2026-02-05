import { Container, Button, SectionHeading, BodyText, Divider } from '../components/ui';
import SEO from '../components/SEO';
import { colors, fonts } from '../config/tokens';

const NotFoundPage = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "80px",
    }}
  >
    <SEO title="Page Not Found" noindex />

    <Container style={{ textAlign: "center" }}>
      <span
        style={{
          fontFamily: fonts.display,
          fontSize: "120px",
          fontWeight: 300,
          color: colors.sand,
          lineHeight: 1,
        }}
      >
        404
      </span>

      <SectionHeading style={{ marginTop: "16px" }}>Page Not Found</SectionHeading>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider />
      </div>

      <BodyText style={{ margin: "0 auto 32px", textAlign: "center" }}>
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </BodyText>

      <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
        <Button to="/">Return Home</Button>
        <Button variant="outline" to="/contact">
          Contact Us
        </Button>
      </div>
    </Container>
  </div>
);

export default NotFoundPage;
