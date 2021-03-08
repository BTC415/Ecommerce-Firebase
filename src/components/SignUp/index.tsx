//importing hooks
import { useState } from 'react';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
//State interface
interface FormElementsState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
//sign up component
const SignUp: React.FC = () => {
  //local state
  const [formElements, setFormElements] = useState<FormElementsState>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  //on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value });
  };
  //on submit handler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <div className="container">
        <h2>Sign</h2>
        <form onSubmit={onSubmitHandler}>
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
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
