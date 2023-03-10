import { useContext, useState } from "react";
import LoginCard from "../../../components/LoginCard";
import { CredentialsDTO } from "../../../models/auth";
import * as authService from "../../../services/auth-service";
import { ContextToken } from "../../../utils/context-token";
import "./styles.scss";

export default function Login() {
  const { setContextToken } = useContext(ContextToken);

  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password"
    }
  });

  function handleSubmit(formDataProps: any) {
    setFormData(formDataProps);
    authService
      .loginRequest({username: formData.username.value, password: formData.password.value})
      .then((response) => {
        authService.saveAccessToken(response.data.access_token);
        setContextToken(authService.getAccessTokenPayload());
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function handleChange(formData: any) {
    setFormData(formData);
  }

  return (
    <main className="login">
      <section id="login-card">
        <LoginCard
          onChange={handleChange}
          formData={formData}
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
}
