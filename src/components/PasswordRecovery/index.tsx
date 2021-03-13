//importing hooks
import { useState, useEffect } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
//import router utils
import { withRouter, RouteComponentProps } from 'react-router-dom';
//importing components
import MainForm from '../Forms/MainForm';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
//props interface
interface PasswordRecoveryProps extends RouteComponentProps<any> {}
//email password form component
const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ history }) => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  //redux actions & state
  const { recoverPasswordStart, resetAuthForms } = useActions();
  const { recoverPasswordSuccess, userErrors } = useTypedSelector(
    state => state.user
  );
  //resetting form
  useEffect(() => {
    if (recoverPasswordSuccess) {
      setEmail('');
      resetAuthForms();
      history.push('/login');
    } else {
      setErrors(userErrors);
    }
  }, [recoverPasswordSuccess, history, resetAuthForms, userErrors]);
  //on submit handler
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    recoverPasswordStart(email);
  };
  return (
    <MainForm headline="Password Recovery">
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return (
              <li style={{ lineHeight: '1.5', margin: '0 10px' }} key={index}>
                {err}
              </li>
            );
          })}
        </ul>
      )}
      <form onSubmit={onSubmitHandler}>
        <div className="form__inputs">
          <FormInput
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
          />
        </div>
        <Button type="submit">Send me instructions</Button>
      </form>
    </MainForm>
  );
};

export default withRouter(PasswordRecovery);
