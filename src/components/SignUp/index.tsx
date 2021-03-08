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
    setFormElements({ ...formElements, displayName: e.target.value });
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
          <Button>Sign In With Google</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
