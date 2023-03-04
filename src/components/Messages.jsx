function Messages(props) {
  console.log(props);
  return (
    <div className="messages">
      {props.messages.map((m) => (
        <div key={m.id} className={"message " + m.type}>
          {m.text}
        </div>
      ))}
    </div>
  );
}

export default Messages;
