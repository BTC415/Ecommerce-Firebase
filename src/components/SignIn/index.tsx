//importing hooks & router utils
import { useEffect, useState } from 'react';
import { useActions, useTypedSelector } from '../../hooks';
import { Link } from 'react-router-dom';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import MainForm from '../Forms/MainForm';
//importing firebase utils
import { signInWithGoogle } from '../../firebase/utils';
//importing router utils
import { withRouter } from 'react-router-dom';
import { PropsWithRouter } from '../../state';
//sign in component
const SignIn: React.FC<PropsWithRouter> = ({ history }) => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  //redux actions & state
  const { signInUser } = useActions();
  const { signInSuccess } = useTypedSelector(state => state.user);
  //reset form
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrors([]);
  };
  //resetting form & redirecting
  useEffect(() => {
    if (signInSuccess.status) {
      resetForm();
      history.push('/');
    } else if (signInSuccess.err) {
      setErrors([signInSuccess.err!]);
    }
  }, [signInSuccess, history]);
  //on submit handler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInUser(email, password);
  };
  return (
    <MainForm headline="Log In">
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
      <div className="common__signin">
        <form onSubmit={onSubmitHandler}>
          <div className="form__inputs">
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
          </div>
          <Link className="password__recovery" to="/recovery">
            <h3>Forgot Password?</h3>
          </Link>
          <Button type="submit">Sign In</Button>
        </form>
      </div>
      <span>Or</span>
      <div className="social__signin">
        <form onSubmit={e => e.preventDefault()}>
          <Button onClick={() => signInWithGoogle(history)}>
            Sign In With Google
          </Button>
        </form>
      </div>
    </MainForm>
  );
};
export default withRouter(SignIn);
