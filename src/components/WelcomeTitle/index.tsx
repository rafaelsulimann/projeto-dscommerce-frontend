import { UserDTO } from '../../models/user';
import './styles.scss';

type Props = {
  user? : UserDTO;
}

export default function WelcomeTitle({user} : Props) {
  return (
    <div className="container welcome-title-container">
      <h2>Bem-vindo à área administrativa {user?.name}</h2>
    </div>
  );
}
