//importing components
import Button from '../Forms/Button';
//sign up component
const SignUp: React.FC = () => {
  return (
    <div className="signup">
      <div className="container">
        <h2>Sign</h2>
        <form>
          <Button>Sign In With Google</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
