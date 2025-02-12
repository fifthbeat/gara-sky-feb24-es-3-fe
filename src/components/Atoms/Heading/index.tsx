import cn from "classnames";
import "./styles.css";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  children: string;
  withGradient?: boolean;
  variant: "large-display" | "display" | "page-title" | "section-title";
  className?: string;
};

const Heading = ({ children, as: Component, variant, withGradient = false, className }: Props) => {
  return (
    <Component className={cn("heading", variant, withGradient ? "heading__gradient" : "", className)}>
      {children}
    </Component>
  );
};

export default Heading;
