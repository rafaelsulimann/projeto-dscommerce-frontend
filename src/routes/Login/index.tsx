import HeaderClient from "../../components/HeaderClient";
import LoginCard from "../../components/LoginCard";
import "./styles.scss";

export default function Login() {
  return (
    <>
      <header>
        <HeaderClient />
      </header>
      <main>
        <section id="login">
          <LoginCard />
        </section>
      </main>
    </>
  );
}
