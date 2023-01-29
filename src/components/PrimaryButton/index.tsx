import './styles.scss';

type Props = {
    name : string;
}

export default function PrimaryButton({name} : Props) {
    return (
        <div className="primary-button">
            <input type="submit" value={name}/>
        </div>
    );
}