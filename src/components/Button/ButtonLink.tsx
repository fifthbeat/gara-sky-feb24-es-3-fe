import Text from "@components/Atoms/Text";
import { AriaLinkOptions, useLink } from "@react-aria/link";
import { mergeProps } from "@react-aria/utils";
import cn from "classnames";
import { useRef } from "react";
import { Link, To } from "react-router";

type Props = AriaLinkOptions & {
  href: To;
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
};

const ButtonLink = ({ label, icon, variant, ...props }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { linkProps } = useLink(props, ref);

  return (
    <Link
      {...mergeProps(linkProps, props)}
      ref={ref}
      to={props.href}
      className={cn("button", { "button-secondary": variant === "secondary" })}
    >
      <Text as="span" variant="body-small" weight="medium">
        {label}
      </Text>
      {icon}
    </Link>
  );
};

export default ButtonLink;
