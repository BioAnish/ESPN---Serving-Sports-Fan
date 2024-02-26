import React from "react";
import styles from "./Card.module.scss";
import { ICardProps } from "./Card.types";

const Card = ({
  children,
  cardStyle = {},
  backgroundColor = "#ffffff",
  padding = 0,
  heading,
  ...props
}: ICardProps) => {
  const mergedStyles = {
    background: backgroundColor,
    padding,
    ...cardStyle,
  };

  return (
    <div className={styles.cardContainer} style={mergedStyles} {...props}>
      <h3 className={styles.cardHeading}>{heading}</h3>
      {children}
    </div>
  );
};

export default Card;
