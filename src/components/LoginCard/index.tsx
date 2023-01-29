import "./styles.scss";

export default function LoginCard() {
  return (
    <>
      <div className="container login-container">
        <div className="login-card">
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <form className="login-form">
            <div className="login-form-input-text">
              <label htmlFor="Email">Email</label>
              <input name="email" id="email" type="text" placeholder="Email" />
            </div>
            <div className="login-form-input-text">
              <label htmlFor="password">Senha</label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Senha"
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
