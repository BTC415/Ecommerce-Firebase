//importing hooks & router utils
import { useEffect, useState } from 'react';
import { useTypedSelector, useUserActions } from '../../hooks';
import { Link } from 'react-router-dom';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import MainForm from '../Forms/MainForm';
//importing router utils
import { useHistory } from 'react-router-dom';
//sign in component
const SignIn: React.FC = () => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  //redux actions, router history & state
  const history = useHistory();
  const {
    emailSignInStart,
    googleSignInStart,
    resetUserState,
  } = useUserActions();
  const { currentUser, userErrors } = useTypedSelector(state => state.user);
  //reset form
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrors([]);
  };
  //resetting user on first render
  useEffect(() => {
    resetUserState();
  }, [resetUserState]);
  //resetting forms & redirecting
  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    } else {
      setErrors(userErrors);
    }
  }, [currentUser, history, userErrors]);
  //on submit handler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailSignInStart({ email, password });
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
          <Button onClick={() => googleSignInStart()}>
            Sign In With Google
          </Button>
        </form>
      </div>
    </MainForm>
  );
};
export default SignIn;
