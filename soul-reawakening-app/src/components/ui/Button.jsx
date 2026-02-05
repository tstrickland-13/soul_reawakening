import { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../config/tokens';

const Button = ({
  children,
  variant = "primary",
  onClick,
  to,
  href,
  type = "button",
  disabled = false,
  style = {},
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);
  const isPrimary = variant === "primary";

  const buttonStyles = {
    fontFamily: fonts.body,
    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 600,
    padding: isPrimary ? "16px 40px" : "14px 32px",
    border: isPrimary ? "none" : `1px solid ${colors.charcoal}`,
    borderRadius: "0",
    background: isPrimary
      ? hovered ? colors.espresso : colors.charcoal
      : hovered ? colors.charcoal : "transparent",
    color: isPrimary
      ? colors.cream
      : hovered ? colors.cream : colors.charcoal,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.35s ease",
    display: "inline-block",
    textAlign: "center",
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const commonProps = {
    className,
    style: buttonStyles,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  // External link
  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link {...commonProps} to={to}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button
      {...commonProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
