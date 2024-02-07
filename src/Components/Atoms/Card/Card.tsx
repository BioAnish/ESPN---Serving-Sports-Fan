import React from "react";
import styles from "./Card.module.scss";
import { ICardProps } from "./Card.types";

const Card = ({ children, cardStyle, backgroundColor, ...props }: ICardProps) => {
  const bgColor = backgroundColor || "#ffffff";
  const mergedStyles = {
    background: bgColor,
    ...cardStyle,
  };

  return (
    <div className={styles["card-container"]} style={mergedStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;
