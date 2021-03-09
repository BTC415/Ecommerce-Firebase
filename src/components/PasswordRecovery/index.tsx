//importing hooks
import { useState } from 'react';
//importing components
import MainForm from '../Forms/MainForm';
import FormInput from '../Forms/FormInput';
import Button from '../Forms/Button';
//state interface
interface FormElementsState {
  email: string;
}
const initialState: FormElementsState = {
  email: '',
};
//email password form component
const PasswordRecovery: React.FC = () => {
  //local state
  const [formElements, setFormElements] = useState<FormElementsState>(
    initialState
  );
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };
  return (
    <MainForm headline="Password Recovery">
      <div className="form__inputs">
        <form onSubmit={onSubmitHandler}>
          <FormInput
            onChange={onChangeHandler}
            type="email"
            name="email"
            placeholder="Email"
            value={formElements.email}
          />
        </form>
      </div>
    </MainForm>
  );
};

export default PasswordRecovery;
