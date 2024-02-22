import React from "react";
import styles from "./Card.module.scss";
import { ICardProps } from "./Card.types";

const Card = ({
  children,
  cardStyle,
  backgroundColor,
  padding,
  heading,
  ...props
}: ICardProps) => {
  const bgColor = backgroundColor || "#ffffff";
  const mergedStyles = {
    background: bgColor,
    padding: padding || 0,
    ...cardStyle,
  };

  return (
    <div className={styles["card-container"]} style={mergedStyles} {...props}>
      <h3 className={styles["card-heading"]}>{heading}</h3>
      {children}
    </div>
  );
};

export default Card;
