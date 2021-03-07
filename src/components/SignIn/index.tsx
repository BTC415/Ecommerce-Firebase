//importing components
import Button from '../Forms/Button';
//sign in component
const SignIn = () => {
  return (
    <div className="signin">
      <div className="container">
        <h2>LogIn</h2>
        <form>
          <Button>Sign In With Google</Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
