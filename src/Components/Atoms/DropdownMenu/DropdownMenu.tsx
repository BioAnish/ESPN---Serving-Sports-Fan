import React from "react";
import styles from "./DropdownMenu.module.scss";
import { IDropdownMenuProps } from "./DropdownMenu.types";

const DropdownMenu = ({
  items = [],
  blueVariant,
  onSelect,
  ...props
}: IDropdownMenuProps) => {
  const handleItemClick = (item: string) => {
    if (onSelect) {
      onSelect(item); // Notify parent component of the selected item
    }
  };
  return (
    <div {...props} className={styles.dropdown__container}>
      {items.length > 0 ? (
        <ul className={`${styles.dropdown__box} ${blueVariant ? styles.blueVariant : ""}`}>
          {items.map((item: string, index: number) => (
            <li key={index} className={styles.dropdown__box__item}>
              <a
                href="#"
                className={styles.dropdown__box__item__link}
                onClick={() => handleItemClick(item)}
              >
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyMessage}>No items to display</p>
      )}
    </div>
  );
};

export default DropdownMenu;
