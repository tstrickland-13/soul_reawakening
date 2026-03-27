const Container = ({ children, style = {}, className = "" }) => (
  <div
    className={`site-container ${className}`}
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      ...style,
    }}
  >
    {children}
  </div>
);

export default Container;
