import bank from "./img/bank.jpg";
import ClientsNumber from "./ClientsNumber";
import CurrentBalance from "./CurrentBalance";

function Home(props) {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={bank}
        alt="bank app home page img"
        style={{ height: "830px", width: "80%" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={props.headerBank}>A bank you can count on.</div>

        <ClientsNumber
          className="header"
          clientList={props.clientList}
        ></ClientsNumber>
        <CurrentBalance
          className="header"
          clientList={props.clientList}
        ></CurrentBalance>
      </div>
    </div>
  );
}

export default Home;
