import { useButton } from "@react-aria/button";
import { useRef } from "react";
import cn from "classnames";
import "./styles.css";

type Props = {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<Props> = ({ onClick, label, icon, variant = "primary" }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ onPress: onClick }, ref);

  return (
    <button {...buttonProps} ref={ref} className={cn("button", { "button-secondary": variant === "secondary" })}>
      {label}
      {icon}
    </button>
  );
};
export default Button;
