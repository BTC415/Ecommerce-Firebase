//importing hooks
import { useState } from 'react';
//importing firebase utils
import { auth, handleUserProfile } from '../../firebase/utils';
//importing components
import Button from '../Forms/Button';
import FormInput from '../Forms/FormInput';
import MainForm from '../Forms/MainForm';
//sign up component
const SignUp: React.FC = () => {
  //local state
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  //reset form
  const resetForm = () => {
    setErrors([]);
    setEmail('');
    setDisplayName('');
    setConfirmPassword('');
    setPassword('');
  };
  //on submit handler
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    setErrors(err);
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
      resetForm();
    } catch (err) {
      setErrors([...errors, err]);
    }
  };
  return (
    <MainForm headline="Sign Up">
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
      <form onSubmit={onSubmitHandler}>
        <div className="form__inputs">
          <FormInput
            onChange={e => setDisplayName(e.target.value)}
            type="text"
            name="displayName"
            placeholder="Full Name"
            value={displayName}
          />
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
          <FormInput
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </MainForm>
  );
};

export default SignUp;
