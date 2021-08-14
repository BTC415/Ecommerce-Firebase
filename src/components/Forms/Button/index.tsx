//importing types
import { JSXButton } from '../../../../types';

interface ButtonProps extends JSXButton {}

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => (
  <button className="btn" {...otherProps}>
    {children}
  </button>
);

export default Button;
