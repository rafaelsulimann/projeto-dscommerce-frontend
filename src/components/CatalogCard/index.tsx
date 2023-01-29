import productImg from '../../assets/produto.svg';
import './styles.scss';

export default function CatalogCard() {
    return (
        <div className="catalog-card">
            <div className="catalog-card-image">
                <img src={productImg} alt="Produto" />
            </div>
            <div className='catalog-card-infos'>
                <div className='catalog-card-price'>
                    <h3><span>R$</span>5000,00</h3>
                </div>
                <div className='catalog-card-name'>
                    <h3>Computador Gamer XT</h3>
                </div>
            </div>
        </div>
    );
}