import Heading from "@components/Atoms/Heading";
import Text from "@components/Atoms/Text";
import ButtonLink from "@components/Button/ButtonLink";
import "./styles.css";

const NotFound = () => {
  return (
    <div className="not-found__container">
      <div>
        <Heading variant="section-title" as="h3">
          Oops! 404 - Page Not Found
        </Heading>
        <Text variant="body">
          La pagina che stai cercando potrebbe essere stata rimossa o essere temporaneamente non disponibile.
        </Text>
      </div>
      <ButtonLink label="Torna alla Home" href="/" />
    </div>
  );
};

export default NotFound;
