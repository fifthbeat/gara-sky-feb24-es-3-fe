import cn from "classnames";
import "./styles.css";

type Props = {
  as?: "p" | "span";
  children: React.ReactNode;
  variant: "body-large" | "body-fluid" | "body" | "body-small" | "small-text";
  className?: string;
};

const Text = ({ as: Component = "p", children, variant, className }: Props) => {
  return <Component className={cn("text", variant, className)}>{children}</Component>;
};

export default Text;
