import Button from "@components/Button";
import Heading from "@components/Atoms/Heading";
import "./styles.css";
import Text from "@components/Atoms/Text";

type Props = {
  subtitle?: string;
};

const ErrorFallback = ({ subtitle }: Props) => {
  return (
    <div className="error-fallback__container">
      <div>
        <Heading variant="section-title" as="h3">
          Oops! Qualcosa è andato storto.
        </Heading>
        {subtitle && <Text variant="body">{subtitle}</Text>}
      </div>
      <Button label="Riprova" onClick={() => window.location.reload()} />
    </div>
  );
};

export default ErrorFallback;
