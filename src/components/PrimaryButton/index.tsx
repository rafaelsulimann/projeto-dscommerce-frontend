import './styles.scss';

type Props = {
    value : string;
    onClick?: any;
}

export default function PrimaryButton({value, onClick} : Props) {
    return (
        <div className="primary-button">
            <input type="submit" value={value} onClick={onClick}/>
        </div>
    );
}