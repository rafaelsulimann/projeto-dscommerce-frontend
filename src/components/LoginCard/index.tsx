import { useState } from "react";
import { CredentialsDTO } from "../../models/auth";
import "./styles.scss";

type Props = {
  onSubmit : Function;
  onChange: Function;
  formData: CredentialsDTO;
}

export default function LoginCard({onSubmit, onChange, formData} : Props) {

  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit(formData);
  }

  function handleChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    onChange({ ...formData, [name]: value });
  }

  return (
    <>
      <div className="container login-container">
        <div className="login-card">
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-input-text">
              <label htmlFor="username">Email</label>
              <input
                name="username"
                id="username"
                value={formData.username || ""}
                type="text"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="login-form-input-text">
              <label htmlFor="password">Senha</label>
              <input
                name="password"
                id="password"
                value={formData.password || ""}
                type="password"
                placeholder="Senha"
                onChange={handleChange}
              />
            </div>
            <div className="login-form-input-submit">
              <input type="submit" value="Entrar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
