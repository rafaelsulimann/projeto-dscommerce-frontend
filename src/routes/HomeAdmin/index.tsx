import HeaderAdmin from "../../components/HeaderAdmin";
import WelcomeTitle from "../../components/WelcomeTitle";
import "./styles.scss";

export default function HomeAdmin() {
  return (
    <>
      <header>
          <HeaderAdmin name="Maria Silva" />
      </header>
      <main>
        <section id="welcome-title">
          <WelcomeTitle />
        </section>
      </main>
    </>
  );
}
