import PrimaryButton from "../PrimaryButton";
import './styles.scss';

type Props = {
    modalMessage: string;
    onCloseModal: any;
}

export default function DialogInfo({modalMessage, onCloseModal} : Props) {
    return(
        <div className="dialog-background" onClick={onCloseModal}>
            <div className="dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{modalMessage}</h2>
                <PrimaryButton value="Ok" buttonClassName="dialog-box-button" onClick={onCloseModal}/>
            </div>
        </div>
    );
}