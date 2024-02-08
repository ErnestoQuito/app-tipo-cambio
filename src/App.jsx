// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import { Exchange } from "./components/Exchange";
import "./App.css";

function App() {
  
  return (
    <div>
      <h2>Tipo de cambio</h2>
      <Exchange />
    </div>
  );
}

export default App;
