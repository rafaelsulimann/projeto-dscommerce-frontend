import { Link } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import SecondButton from "../../../components/SecondButton";
import "./styles.scss";

type Props = {
  message: string;
};

export default function Error({ message }: Props) {
  return (
    <main className="error">
      <section className="error-message-title">
        <ErrorMessage message={message} />
      </section>
      <section className="container error-home-button-container">
        <div className="error-home-button">
          <Link to="/" className="error-home-button-link">
            <SecondButton value="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
