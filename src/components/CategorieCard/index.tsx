import './styles.scss';

type Props = {
    name : string;
}

export default function CategorieCard({name} : Props) {
    return (
        <div className="categorie-card">
            <h4>{name}</h4>
        </div>
    );
}