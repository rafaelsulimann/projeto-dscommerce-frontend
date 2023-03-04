import { useEffect, useState } from "react";
import WelcomeTitle from "../../../components/WelcomeTitle";
import { UserDTO } from "../../../models/user";
import * as userService from '../../../services/user-service'
import './styles.scss';

export default function WelcomeAdmin() {

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe()
      .then(response => {
        setUser(response.data);
        console.log(response.data);
      })
  },[])

  return (
    <main className="welcome-admin">
      <section id="welcome-title">
        <WelcomeTitle user={user}/>
      </section>
    </main>
  );
}
