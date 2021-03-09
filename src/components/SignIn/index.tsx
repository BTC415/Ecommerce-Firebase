//importing hooks & router utils
import { useState } from 'react';
import { Link } from 'react-router-dom';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import MainForm from '../Forms/MainForm';
//importing firebase utils
import { auth, signInWithGoogle } from '../../firebase/utils';
interface FormElementsState {
  email: string;
  password: string;
  errors: string[];
}
const initialState: FormElementsState = {
  email: '',
  password: '',
  errors: [],
};
//sign in component
const SignIn: React.FC = () => {
  //local state
  const [formElements, setFormElements] = useState<FormElementsState>(
    initialState
  );
  //on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //destructuring
    const { email, password } = formElements;
    try {
      //signing user in
      await auth.signInWithEmailAndPassword(email, password);
      //resetting the form
      setFormElements(initialState);
    } catch (err) {
      //catching errors
      setFormElements({
        ...formElements,
        errors: [...formElements.errors, err.message],
      });
    }
  };

  return (
    <MainForm headline="Log In">
      {formElements.errors.length > 0 && (
        <ul>
          {formElements.errors.map((err, index) => {
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
              onChange={onChangeHandler}
              type="email"
              name="email"
              placeholder="Email"
              value={formElements.email}
            />
            <FormInput
              onChange={onChangeHandler}
              type="password"
              name="password"
              placeholder="Password"
              value={formElements.password}
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
          <Button onClick={signInWithGoogle}>Sign In With Google</Button>
        </form>
      </div>
    </MainForm>
  );
};
export default SignIn;
