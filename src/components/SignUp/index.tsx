//importing hooks
import { useState, useEffect } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import MainForm from '../Forms/MainForm';
//importing router utils
import { withRouter } from 'react-router-dom';
import { PropsWithRouter } from '../../state';
//sign up component
const SignUp: React.FC<PropsWithRouter> = ({ history }) => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  //redux actions & state
  const { signUpUser, resetAuthForms } = useActions();
  const { signUpSuccess } = useTypedSelector(state => state.user);
  //reset form
  const resetForm = () => {
    setErrors([]);
    setEmail('');
    setDisplayName('');
    setConfirmPassword('');
    setPassword('');
  };
  //resetting form & redirecting
  useEffect(() => {
    if (signUpSuccess.status) {
      resetForm();
      resetAuthForms();
      history.push('/');
    } else {
      setErrors(signUpSuccess.err!);
    }
  }, [signUpSuccess, history, resetAuthForms]);
  //on submit handler
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpUser(displayName, email, password, confirmPassword);
  };
  return (
    <MainForm headline="Sign Up">
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
            onChange={e => setDisplayName(e.target.value)}
            type="text"
            name="displayName"
            placeholder="Full Name"
            value={displayName}
          />
          <FormInput
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
          />
          <FormInput
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
          />
          <FormInput
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </MainForm>
  );
};

export default withRouter(SignUp);
