import { useEffect, useState } from "react";
import {unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AccessPayloadTokenDTO } from "./models/auth";
import HomeAdmin from "./routes/HomeAdmin";
import NewProduct from "./routes/HomeAdmin/NewProduct";
import ProductListing from "./routes/HomeAdmin/ProductListing";
import WelcomeAdmin from "./routes/HomeAdmin/WelcomeAdmin";
import HomeClient from "./routes/HomeClient";
import Cart from "./routes/HomeClient/Cart";
import CartCardIndex from "./routes/HomeClient/Cart/CartCardIndex";
import CartConfirmation from "./routes/HomeClient/Cart/CartConfirmation";
import Catalog from "./routes/HomeClient/Catalog";
import Login from "./routes/HomeClient/Login";
import ProductDetails from "./routes/HomeClient/ProductDetails";
import { ContextCartCount } from "./utils/context-cart";
import { history } from "./utils/history";
import * as authService from "./services/auth-service";
import * as cartService from "./services/cart-service";
import { ContextToken } from "./utils/context-token";

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextToken, setContextToken] = useState<AccessPayloadTokenDTO>();

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);
    if (authService.isAuthenticated()) {
      const tokenPayload = authService.getAccessTokenPayload();
      setContextToken(tokenPayload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextToken, setContextToken }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<HomeClient />}>
              <Route index element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="product-details/:productId" element={<ProductDetails />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />}>
                <Route index element={<CartCardIndex />} />
                <Route path="confirmation/:orderId" element={<CartConfirmation />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="/admin" element={<PrivateRoute roles={["ROLE_ADMIN"]}><HomeAdmin /></PrivateRoute>}>
              <Route index element={<WelcomeAdmin />} />
              <Route path="product-listing" element={<ProductListing />} />
              <Route path="new-product" element={<NewProduct />} />
              <Route path="*" element={<Navigate to="/admin" />} />
            </Route>
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
