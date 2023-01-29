import './styles.scss';

type Props = {
    name : string;
}

export default function SecondButton({name}: Props) {
    return (
        <div className="second-button">
            <input type="button" value={name}/>
        </div>
    );
}