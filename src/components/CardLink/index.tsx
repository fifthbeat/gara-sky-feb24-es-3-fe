import { Link } from "react-router-dom";
import { useRef } from "react";
import Text from "@components/Atoms/Text";
import { useLink } from "@react-aria/link";
import { useHover } from "@react-aria/interactions";
import "./styles.css";
import { useFocusRing } from "@react-aria/focus";

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt?: string;
  href: string;
};

const CardLink = ({ title, imageUrl, imageAlt = title, href, subtitle }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { hoverProps, isHovered } = useHover({});
  const { focusProps, isFocusVisible } = useFocusRing();
  const { linkProps } = useLink({ href }, ref);

  return (
    <Link {...linkProps} {...hoverProps} {...focusProps} ref={ref} to={href} className="card__link">
      <div className="card__content">
        <Text as="p" variant="body">
          {title}
        </Text>
        {(isHovered || isFocusVisible) && <Text variant="body-small">{subtitle}</Text>}
      </div>
      <div className="card">
        <img src={imageUrl} alt={imageAlt} className="card__image" />
      </div>
    </Link>
  );
};

export default CardLink;
