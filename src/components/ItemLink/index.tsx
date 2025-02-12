import { Link } from "react-router-dom";
import { useRef } from "react";
import Text from "@components/Atoms/Text";
import { useLink } from "@react-aria/link";
import { useHover } from "@react-aria/interactions";
import { useFocusRing } from "@react-aria/focus";
import "./styles.css";

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt?: string;
  href: string;
};

const ItemLink = ({ href, title, imageUrl, imageAlt = title, subtitle }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { hoverProps } = useHover({});
  const { focusProps } = useFocusRing();
  const { linkProps } = useLink({ href }, ref);

  return (
    <Link {...linkProps} {...hoverProps} {...focusProps} ref={ref} to={href} className="item-link">
      <div className="item-link__image-container">
        <img src={imageUrl} alt={imageAlt} className="item-link__image" />
        <div className="item-link__play-icon">▶</div>
      </div>
      <div className="item-link__content">
        <Text variant="body-fluid" className="item-link__title">
          {title}
        </Text>
        <Text variant="small-text" className="item-link__subtitle">
          {subtitle}
        </Text>
      </div>
    </Link>
  );
};

export default ItemLink;
