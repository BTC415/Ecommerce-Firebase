import firebase from 'firebase/app';
//button interface
interface ButtonProps {
  onClick?: () => Promise<firebase.auth.UserCredential>;
}
//button component
const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
