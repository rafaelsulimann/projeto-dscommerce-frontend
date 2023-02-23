import './styles.scss';

export default function EmptyCartMessage() {
    return(
        <div className="container empty-cart-message-container">
            <div className="empty-cart-message">
                <h2>Seu carrinho está vazio</h2>
            </div>
        </div>
    );
}