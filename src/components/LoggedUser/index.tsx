import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import * as authService from '../../services/auth-service'
import { Link } from "react-router-dom";

type Props = {
    linkClassName: string;
}

export default function LoggedUser({linkClassName} : Props) {

    const {contextToken, setContextToken} = useContext(ContextToken);

    function handleLogoutClick(){
        authService.logout();
        setContextToken(undefined);
    }

    return(
        
        contextToken
        ? (
            <>
                <p>{contextToken.user_name}</p>
                <a onClick={handleLogoutClick}><span>Sair</span></a>
            </>
        )
        : (
            <Link to="/login" className={linkClassName}>
              Entrar
            </Link>
        )
    );
}