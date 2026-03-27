import { colors, fonts } from '../../config/tokens';

export const SectionLabel = ({ children, style = {} }) => (
  <span
    style={{
      fontFamily: fonts.body,
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: colors.burntOrange,
      fontWeight: 600,
      ...style,
    }}
  >
    {children}
  </span>
);

export const SectionHeading = ({ children, style = {}, as: Tag = "h2" }) => (
  <Tag
    style={{
      fontFamily: fonts.display,
      fontSize: "clamp(28px, 4vw, 46px)",
      fontWeight: 400,
      lineHeight: 1.2,
      color: colors.espresso,
      ...style,
    }}
  >
    {children}
  </Tag>
);

export const PageTitle = ({ children, style = {} }) => (
  <h1
    style={{
      fontFamily: fonts.display,
      fontSize: "clamp(36px, 5vw, 56px)",
      fontWeight: 300,
      color: colors.espresso,
      margin: "16px 0",
      ...style,
    }}
  >
    {children}
  </h1>
);

export const BodyText = ({ children, style = {} }) => (
  <p
    style={{
      fontFamily: fonts.body,
      fontSize: "15px",
      lineHeight: 1.8,
      color: colors.warmGray,
      maxWidth: "580px",
      ...style,
    }}
  >
    {children}
  </p>
);

export const Divider = ({ style = {} }) => (
  <div
    style={{
      width: "48px",
      height: "1px",
      background: `linear-gradient(90deg, ${colors.burntOrange}, ${colors.taupe})`,
      margin: "20px 0",
      ...style,
    }}
  />
);

export const Highlight = ({ children }) => (
  <span style={{ fontStyle: "italic", fontWeight: 400, color: colors.burntOrange }}>
    {children}
  </span>
);
