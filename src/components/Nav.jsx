function Nav(props) {
  return (
    <div className={props.className}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <h3>Bank app</h3>
        <p className={props.hover}>Bills</p>
      </div>
      <div>
        <p className={props.hover}>Login</p>
      </div>
    </div>
  );
}

export default Nav;
