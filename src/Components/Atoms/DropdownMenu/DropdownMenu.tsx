import React from "react";
import styles from "./DropdownMenu.module.scss";
import { IDropdownMenuProps } from "./DropdownMenu.types";

const DropdownMenu = ({ items, blueVariant, ...props }: IDropdownMenuProps) => {
  return (
    <div {...props} className={styles.dropdown_container}>
      <ul
        className={`${styles.dropdownBox} ${
          blueVariant ? styles.blueVariant : ""
        }`}
      >
        {items &&
          Array.isArray(items) &&
          items.map((item: string, index: number) => (
            <li key={index} className={styles.dropdownBoxItem}>
              <a className={styles.dropdownBoxItemLink}>
                <span>{item}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
