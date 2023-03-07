import './styles.scss';

type Props = {
    value : string;
    buttonClassName?: string;
    onClick?: any
}

export default function SecondButton({value, buttonClassName, onClick}: Props) {
    return (
        <div className="second-button">
            <input type="button" value={value} className={buttonClassName} onClick={onClick}/>
        </div>
    );
}