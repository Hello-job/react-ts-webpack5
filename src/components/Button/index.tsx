import React, { memo } from "react";
import Style from "./style/index.module.less";

const Button = () => {
  return <div className={Style.button}>我是按钮</div>;
};

export default memo(Button);
