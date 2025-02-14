import Text from "@components/Atoms/Text";
import "./styles.css";
import { creditsMenuItems, footerMenuItems } from "./items";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="layout__container footer-menu__item">
          {footerMenuItems.map((menu, index) => {
            return (
              <div role="group" key={index} className="menu-item__group">
                <Text variant="body" className="menu-item__title" weight="medium">
                  {menu.title}
                </Text>
                <ul className="menu-item__list" aria-label={menu.title}>
                  {menu.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.url}>
                          <Text as="span" variant="body">
                            {item.title}
                          </Text>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer-legal">
        <div className="layout__container footer-legal__section">
          <div className="sky-logo-container">
            <img src="/logo-sky-colore.svg" alt="Sky logo" className="footer__logo" />
          </div>

          <div className="footer-legal__credits">
            <Text variant="body-small">Copyright 2024 Sky Italia - P.IVA 04619241005</Text>
            <Text variant="x-small-text">
              Tutti i marchi Sky e i diritti di proprietà intellettuale in essi contenuti, sono di proprietà di Sky
              international AG e sono utilizzati su licenza.
            </Text>
          </div>

          <nav aria-label="Legal footer" className="footer-legal__menu-item">
            {creditsMenuItems.map((item, index) => {
              return (
                <a className="section" href={item.url} key={index}>
                  <Text as="span" variant="body-small">
                    {item.title}
                  </Text>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="footer-spectrumLine"></div>
    </footer>
  );
};

export default Footer;
