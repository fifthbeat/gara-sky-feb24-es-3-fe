import cn from "classnames";
import "./styles.css";

type Props = {
  as?: "p" | "span";
  children: React.ReactNode;
  variant: "body-large" | "body-fluid" | "body" | "body-small" | "small-text";
};

const Text = ({ as: Component = "p", children, variant }: Props) => {
  return <Component className={cn("text", variant)}>{children}</Component>;
};

export default Text;
