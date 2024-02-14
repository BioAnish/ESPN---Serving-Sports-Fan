import React from "react";
import style from "./Dropdown.module.scss";
import { IDropdownProps } from "./Dropdown.types";

const Dropdown = ({ children }: IDropdownProps) => {
  return (
    <div className={style.dropdown_wrapper}>
      <button className={style.dropdown_button}>Top event</button>
      <div className={`${style.dropdown_container}`}>{children}</div>
    </div>
  );
};

export default Dropdown;
