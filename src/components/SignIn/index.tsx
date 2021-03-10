//importing hooks & router utils
import { useState } from 'react';
import { Link } from 'react-router-dom';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import MainForm from '../Forms/MainForm';
//importing firebase utils
import { auth, signInWithGoogle } from '../../firebase/utils';
//importing router utils
import { withRouter } from 'react-router-dom';
import { PropsWithRouter } from '../../state';
//sign in component
const SignIn: React.FC<PropsWithRouter> = ({ history }) => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  //reset form
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrors([]);
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //signing user in
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //resetting the form
      resetForm();
      //redirecting
      history.push('/');
    } catch (err) {
      //catching errors
      setErrors(err);
    }
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
