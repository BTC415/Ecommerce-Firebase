//importing components
import Button from '../Forms/Button';
//importing google provider function
import { signInWithGoogle } from '../../firebase/utils';
//sign in component
const SignIn = () => {
  //submit handler
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="signin">
      <div className="container">
        <h2>LogIn</h2>
        <form onSubmit={onSubmitHandler}>
          <Button onClick={signInWithGoogle}>Sign In With Google</Button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
