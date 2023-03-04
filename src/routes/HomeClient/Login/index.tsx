import { useState } from "react";
import LoginCard from "../../../components/LoginCard";
import { CredentialsDTO } from "../../../models/auth";
import * as authService from '../../../services/auth-service'
import "./styles.scss";

export default function Login() {

  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: ""
  })

  function handleSubmit(loginRequest : CredentialsDTO) {
    setFormData(loginRequest);
    authService.loginRequest(formData)
      .then(response => {
        authService.saveAccessToken(response.data.access_token);
        console.log(authService.getAccessTokenPayload());
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  function handleChange(loginData : CredentialsDTO) {
    setFormData(loginData);
  }

  return (
    <main className="login">
      <section id="login-card">
        <LoginCard onChange={handleChange} formData={formData} onSubmit={handleSubmit}/>
      </section>
    </main>
  );
}
