import React from "react";
import style from "./Button.module.scss";
import cn from "classnames";
import { IButtonProps } from "./Button.types";

const Button = ({
  children,
  label,
  variant = "primary",
  iconPath,
  ...props
}: IButtonProps) => {
  const hasIcon = variant === "yellow" && iconPath;
  return (
    <button className={cn(style.button)} data-variant={variant} {...props}>
      {children ?? label}
      {hasIcon && <img src={iconPath} alt="icon" className={style.icon} />}
    </button>
  );
};

export default Button;
