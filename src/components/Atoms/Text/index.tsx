import cn from "classnames";
import "./styles.css";

type Props = {
  as?: "p" | "span";
  children: React.ReactNode;
  variant: "body-large" | "body-fluid" | "body" | "body-small" | "small-text" | "x-small-text";
  className?: string;
  weight?: "medium" | "bold";
  inverse?: boolean;
};

const Text = ({ as: Component = "p", children, variant, className, weight, inverse }: Props) => {
  return (
    <Component className={cn("text", variant, className, { [`text__${weight}`]: weight, text__inverse: inverse })}>
      {children}
    </Component>
  );
};

export default Text;
