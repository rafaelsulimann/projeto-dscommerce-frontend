import './styles.scss';

type Props = {
    value : string;
}

export default function PrimaryButton({value} : Props) {
    return (
        <div className="primary-button">
            <input type="submit" value={value}/>
        </div>
    );
}