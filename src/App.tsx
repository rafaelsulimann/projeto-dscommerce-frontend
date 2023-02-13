import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeAdmin from "./routes/HomeAdmin";
import NewProduct from "./routes/HomeAdmin/NewProduct";
import ProductListing from "./routes/HomeAdmin/ProductListing";
import WelcomeAdmin from "./routes/HomeAdmin/WelcomeAdmin";
import HomeClient from "./routes/HomeClient";
import Cart from "./routes/HomeClient/Cart";
import CartCardIndex from "./routes/HomeClient/Cart/CartCardIndex";
import CartButtonsIndex from "./routes/HomeClient/Cart/CartCardIndex";
import CartConfirmation from "./routes/HomeClient/Cart/CartConfirmation";
import Catalog from "./routes/HomeClient/Catalog";
import Login from "./routes/HomeClient/Login";
import ProductDetails from "./routes/HomeClient/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeClient />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product-details/:productId" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />}>
            <Route index element={<CartCardIndex />} />
            <Route path="confirmation" element={<CartConfirmation />}/>
          </Route>
          <Route path="*" element={<Navigate to="/" />}/>
        </Route>
        <Route path="/admin" element={<HomeAdmin />}>
          <Route index element={<WelcomeAdmin />} />
          <Route path="product-listing" element={<ProductListing />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
