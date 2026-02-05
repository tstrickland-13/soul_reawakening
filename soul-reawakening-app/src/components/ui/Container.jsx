const Container = ({ children, style = {}, className = "" }) => (
  <div
    className={className}
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
      ...style,
    }}
  >
    {children}
  </div>
);

export default Container;
