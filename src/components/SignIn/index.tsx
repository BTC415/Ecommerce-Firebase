//importing hooks
import { useState } from 'react';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
//importing firebase utils
import { auth, signInWithGoogle } from '../../firebase/utils';
interface FormElementsState {
  email: string;
  password: string;
}
const initialState: FormElementsState = {
  email: '',
  password: '',
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
      console.log(err);
    }
  };

  return (
    <div className="signin">
      <div className="container">
        <h2>LogIn</h2>
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
            <Button>Sign In</Button>
          </form>
        </div>
        <span>Or</span>
        <div className="social__signin">
          <form onSubmit={e => e.preventDefault()}>
            <Button onClick={signInWithGoogle}>Sign In With Google</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
