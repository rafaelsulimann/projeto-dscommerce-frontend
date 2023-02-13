import { Outlet } from "react-router-dom";
import "./styles.scss";

export default function Cart() {
  return (
    <main className="cart">
      <Outlet />
    </main>
  );
}
