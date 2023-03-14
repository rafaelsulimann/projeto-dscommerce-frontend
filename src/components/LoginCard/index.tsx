import FormInput from "../FormInput";
import * as forms from '../../utils/forms'
import "./styles.scss";

type Props = {
  onSubmit: Function;
  onChange: Function;
  onTurnDirty: Function;
  formData: any;
}

export default function LoginCard({onSubmit, onChange, onTurnDirty, formData} : Props) {

  function handleSubmit(event: any) {
    event.preventDefault();
    onSubmit(formData);
  }

  function handleChange(event: any) {
    onChange(forms.updateAndValidate(formData, event.target.name, event.target.value));
  }

  function handleTurnDirty(name: string) {
    onTurnDirty(forms.dirtyAndValidate(formData, name));
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
                onTurnDirty={handleTurnDirty}
                className="form-input"
                />
                <div className="error-message">{formData.username?.message}</div>
            </div>
            <div className="login-form-input-text">
              <label htmlFor={formData.password.id}>Senha</label>
              <FormInput
                {...formData.password}
                onChange={handleChange}
                onTurnDirty={handleTurnDirty}
                className="form-input"
              />
                <div className="error-message">{formData.password?.message}</div>
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
