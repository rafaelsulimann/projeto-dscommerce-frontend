import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import './styles.scss';

type Props = {
    modalMessage: string;
    onDialogConfirmationAnswer: any;
}

export default function DialogConfirmation({modalMessage, onDialogConfirmationAnswer} : Props) {
  return (
    <div className="dialog-background" onClick={() => onDialogConfirmationAnswer(false)}>
      <div className="dialog-box" onClick={(event) => event.stopPropagation()}>
        <h2>{modalMessage}</h2>
        <div className="dialog-box-buttons">
          <SecondButton value="Não" buttonClassName="dialog-box-button" onClick={() => onDialogConfirmationAnswer(false)}/>
          <PrimaryButton value="Sim" buttonClassName="dialog-box-button" onClick={() => onDialogConfirmationAnswer(true)}/>
        </div>
      </div>
    </div>
  );
}
