import React from "react";
import "./style/app.less";
import small from "../public/small.png";
// import { Button } from "./components/index";
import { Button } from "antd";
import "antd/dist/antd.css";
// import { Button } from "react-componenst-app-test";

function App() {
  return (
    <>
      <h1 className="app">webpack5-react-ts</h1>
      <Button type="primary">你好</Button>
      <img src={small} />
    </>
  );
}

export default App;
