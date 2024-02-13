// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import { Exchange } from "./components/Exchange";
import { Hour } from "./components/Hour";
import "./App.css";

function App() {
  
  return (
    <div className="content-main">
      <h2>Registro de tipo de cambio</h2>
      <Hour />
      <Exchange />
    </div>
  );
}

export default App;
