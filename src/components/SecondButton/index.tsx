import './styles.scss';

type Props = {
    value : string;
}

export default function SecondButton({value}: Props) {
    return (
        <div className="second-button">
            <input type="button" value={value}/>
        </div>
    );
}