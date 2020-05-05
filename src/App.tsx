import * as React from "react";
import "./styles.css";

import { WhiteDot } from "dots";

export default function App() {
  return (
    <div
      className="App"
      style={{ background: "black", width: "100vw", height: "100vh" }}
    >
      <WhiteDot />
    </div>
  );
}
