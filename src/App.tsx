import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderSwitcher } from "./components/HeaderSwitcher/HeaderSwitcher";

function App() {
  return (
    <div className="App">
      <HeaderSwitcher />
      <Outlet />
    </div>
  );
}

export default App;
