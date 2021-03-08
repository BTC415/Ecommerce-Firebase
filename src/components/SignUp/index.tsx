//importing hooks
import { useState } from 'react';
//importing firebase utils
import { auth, handleUserProfile } from '../../firebase/utils';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
//State interface
interface FormElementsState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: string[];
}
const initialState: FormElementsState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
};
//sign up component
const SignUp: React.FC = () => {
  //local state
  const [formElements, setFormElements] = useState<FormElementsState>(
    initialState
  );
  //on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value });
  };
  //on submit handler
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //destructuring
    const { confirmPassword, password, displayName, email } = formElements;
    //validation
    const err: string[] = [];
    if (password !== confirmPassword) {
      err.push("Passwords didn't match. Please try again");
    }
    if (password.length < 6) {
      err.push('Password length must be at least 6 characters');
    }
    if (password.length > 15) {
      err.push('Password length must not exceed 15 characters');
    }
    if (!password || !displayName || !email || !confirmPassword) {
      err.push('One or more fields are missing. Please try again');
    }
    //updating state with errors
    setFormElements({
      ...formElements,
      errors: err,
    });
    //preventing submit when errors occure
    if (err.length > 0) {
      return;
    }
    //submitting and creating user's account
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //saving user to db
      await handleUserProfile(user, { displayName });
      //resetting the form
      setFormElements(initialState);
    } catch (err) {
      setFormElements({
        ...formElements,
        errors: [...formElements.errors, err.message],
      });
    }
  };
  return (
    <div className="signup">
      <div className="container">
        <h2>Sign Up</h2>
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
        <form onSubmit={onSubmitHandler}>
          <div className="form__inputs">
            <FormInput
              onChange={onChangeHandler}
              type="text"
              name="displayName"
              placeholder="Full Name"
              value={formElements.displayName}
            />
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
            <FormInput
              onChange={onChangeHandler}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formElements.confirmPassword}
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
