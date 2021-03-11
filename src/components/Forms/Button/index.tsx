//button interface
interface ButtonProps {
  onClick?: () => any;
  type?: 'submit';
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
