import './styles.scss';

type Props = {
    message : string;
}

export default function ErrorMessage({message} : Props) {
    return(
        <div className="container error-message-container">
            <div className="error-message">
                <h2>{message}</h2>
            </div>
        </div>
    );
}