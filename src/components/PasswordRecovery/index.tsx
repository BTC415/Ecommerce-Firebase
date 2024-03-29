//importing hooks
import { useState, useEffect } from 'react';
import { useUserActions, useTypedSelector } from '../../hooks';
//import router utils
import { useHistory } from 'react-router-dom';
//importing components
import MainForm from '../Forms/MainForm';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const history = useHistory();

  const { recoverPasswordStart, resetUserState } = useUserActions();
  const { recoverPasswordSuccess, userErrors } = useTypedSelector(
    state => state.user
  );

  useEffect(() => {
    resetUserState();
  }, [resetUserState]);

  useEffect(() => {
    if (recoverPasswordSuccess) {
      setEmail('');
      resetUserState();
      history.push('/login');
    } else {
      setErrors(userErrors);
    }
  }, [recoverPasswordSuccess, history, userErrors, resetUserState]);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length > 0) {
      recoverPasswordStart(email);
      setErrors([]);
    } else {
      setErrors(['Please enter a valid email.']);
    }
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

export default PasswordRecovery;
