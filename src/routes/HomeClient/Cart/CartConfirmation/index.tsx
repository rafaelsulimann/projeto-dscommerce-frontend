import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartCardConfirmation from "../../../../components/CartCardConfirmation";
import SecondButton from "../../../../components/SecondButton";
import { OrderDTO } from "../../../../models/order";
import * as orderService from '../../../../services/order-service'
import "./styles.scss";

export default function CartConfirmation() {

  const params = useParams();
  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId))
      .then(response => {
        setOrder(response.data)
      })
  }, [])

  return (
    <>
      <section id="cart-confirmation-product-card">
        <div className="container cart-confirmation-product-card-container">
          <CartCardConfirmation order={order}/>
        </div>
      </section>
      <section id="cart-confirmation">
        <div className="container cart-confirmation-container">
          <div className="container cart-confirmation-message">
            <h2>Pedido realizado! Número {order?.id}</h2>
          </div>
          <Link to="/" className="cart-container-link">
            <SecondButton value="Início" />
          </Link>
        </div>
      </section>
    </>
  );
}
