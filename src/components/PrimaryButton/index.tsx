import './styles.scss';

type Props = {
    value : string;
    onClick?: any;
    buttonClassName?: string;
}

export default function PrimaryButton({value, onClick, buttonClassName} : Props) {
    return (
        <div className="primary-button">
            <input type="submit" value={value} onClick={onClick} className={buttonClassName}/>
        </div>
    );
}