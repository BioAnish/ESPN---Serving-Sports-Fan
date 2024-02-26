export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    variant?: "primary" | "secondary" | "yellow";
    iconPath?: string;
  }