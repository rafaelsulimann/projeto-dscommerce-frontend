import FormInput from "../FormInput";
import * as forms from '../../utils/forms'
import "./styles.scss";

type Props = {
  onSubmit: Function;
  onChange: Function;
  formData: any;
}

export default function LoginCard({onSubmit, onChange, formData} : Props) {

  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit(formData);
  }

  function handleChange(event: any) {
    onChange(forms.update(formData, event.target.name, event.target.value));
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
              <label htmlFor={formData.username.id}>Email</label>
              <FormInput
                {...formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="login-form-input-text">
              <label htmlFor={formData.password.id}>Senha</label>
              <FormInput
                {...formData.password}
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
