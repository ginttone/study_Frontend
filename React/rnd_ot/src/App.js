import React, { useState } from "react";
import { Outlet } from "react-router-dom";
/** 화면상에 항상 렌더링 되어야 하지만 페이지 전환은 필요하지 않은 컴포넌트 */
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { Input } from "reactstrap";

export default function App() {
  const [mode, setMode] = useState('WELCOME');

  return (
    <div className="App">
      <Header
        title="Personal Info."
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      {/* <Headers />
      <Sidebar />
      <Outlet /> */}
    </div>
  );
}
