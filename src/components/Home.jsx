import bank from "./img/bank.jpg";
import ClientsNumber from "./ClientsNumber";
import CurrentBalance from "./CurrentBalance";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:3003/home";

function Home(props) {
  useEffect(() => {
    if (props.lastStateUpdate === null) {
      return;
    }
    axios.get(URL).then((res) => {
      props.setClientList(res.data);
    });
  }, [props.lastStateUpdate]);
  return (
    <div style={{ display: "flex" }}>
      <img
        src={bank}
        alt="bank app home page img"
        style={{ height: "865px", width: "80%" }}
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
