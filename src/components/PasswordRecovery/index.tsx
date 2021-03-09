//importing hooks
import { useState } from 'react';
//importing firebase utils
import { auth } from '../../firebase/utils';
//import router utils
import { withRouter, RouteComponentProps } from 'react-router-dom';
//importing components
import MainForm from '../Forms/MainForm';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
//state interface
interface FormElementsState {
  email: string;
  errors: string[];
}
const initialState: FormElementsState = {
  email: '',
  errors: [],
};
//props interface
interface PasswordRecoveryProps extends RouteComponentProps<any> {}
//email password form component
const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ history }) => {
  //local state
  const [formElements, setFormElements] = useState<FormElementsState>(
    initialState
  );
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { email } = formElements;
      //sending instructions on password recovery
      await auth
        .sendPasswordResetEmail(email, {
          url: 'http://localhost:3000/login',
        })
        .then(() => {
          //redirecting user
          history.push('/login');
        })
        .catch(() => {
          const err: string[] = [''];
          //catching errors
          setFormElements({
            ...formElements,
            errors: err,
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  };
  //on change handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value });
  };
  return (
    <MainForm headline="Password Recovery">
      <form onSubmit={onSubmitHandler}>
        <div className="form__inputs">
          <FormInput
            onChange={onChangeHandler}
            type="email"
            name="email"
            placeholder="Email"
            value={formElements.email}
          />
        </div>
        <Button type="submit">Send me instructions</Button>
      </form>
    </MainForm>
  );
};

export default withRouter(PasswordRecovery);
