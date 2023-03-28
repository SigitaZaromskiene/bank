function ErrorMsg() {
  return (
    <div
      style={{
        color: "red",
        backgroundColor: "white",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      Blocked accounts cannot be used!
    </div>
  );
}

export default ErrorMsg;
