import cn from "classnames";
import "./styles.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: string;
  variant: "large-display" | "display" | "page-title" | "section-title";
  className?: string;
  weight?: "medium" | "bold";
};

const Heading = ({ children, as: Component, variant, className, weight }: Props) => {
  return (
    <Component className={cn("heading", variant, className, { [`text__${weight}`]: weight })}>{children}</Component>
  );
};

export default Heading;
