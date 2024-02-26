import React from "react";
import style from "./Dropdown.module.scss";
import { IDropdownProps } from "./Dropdown.types";

const Dropdown = ({ children, selectedItem }: IDropdownProps) => {
  return (
    <div className={style.dropdown__wrapper}>
      <button className={style.dropdown__button}>{selectedItem || 'Top event'}</button>
      <div className={`${style.dropdown__container}`}>{children}</div>
    </div>
  );
};

export default Dropdown;
