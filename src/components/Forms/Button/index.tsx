//importing types
import { JSXButton } from '../../../state/types';
//button interface
interface ButtonProps extends JSXButton {}
//button component
const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
