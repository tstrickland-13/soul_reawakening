import { colors, fonts } from '../../config/tokens';

const PlaceholderImg = ({
  width = "100%",
  height = "400px",
  text = "Photo",
  src,
  alt,
  style = {},
}) => {
  // If a real image is provided, use it
  if (src) {
    return (
      <img
        src={src}
        alt={alt || text}
        style={{
          width,
          height,
          objectFit: "cover",
          ...style,
        }}
        loading="lazy"
      />
    );
  }

  // Otherwise show placeholder
  return (
    <div
      style={{
        width,
        height,
        background: `linear-gradient(145deg, ${colors.sand}, ${colors.taupeLight})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.accent,
        fontSize: "14px",
        letterSpacing: "2px",
        color: colors.warmGray,
        textTransform: "uppercase",
        ...style,
      }}
      role="img"
      aria-label={text}
    >
      {text}
    </div>
  );
};

export default PlaceholderImg;
