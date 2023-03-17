import { useContext, useState } from "react";
import LoginCard from "../../../components/LoginCard";
import { ContextToken } from "../../../utils/context-token";
import * as authService from "../../../services/auth-service";
import * as forms from '../../../utils/forms'
import "./styles.scss";

export default function Login() {
  const { setContextToken } = useContext(ContextToken);
  const [submitReponseFail, setSubmitResponseFail] = useState(false);

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
    setSubmitResponseFail(false);
    const formDataValidated = forms.dirtyAndValidateAll(formDataProps);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }
    authService
      .loginRequest(forms.toValues(formData))
      .then((response) => {
        authService.saveAccessToken(response.data.access_token);
        setContextToken(authService.getAccessTokenPayload());
        history.back();
      })
      .catch(() => {
        setSubmitResponseFail(true);
      });
  }

  function handleChange(formDataProps: any) {
    setFormData(formDataProps);
  }

  function handleTurnDirty(formDataProps: any){
    setFormData(formDataProps);
  }

  return (
    <main className="login">
      <section id="login-card">
        <LoginCard
          onChange={handleChange}
          onTurnDirty={handleTurnDirty}
          formData={formData}
          onSubmit={handleSubmit}
          submitResponseFail={submitReponseFail}
        />
      </section>
    </main>
  );
}
