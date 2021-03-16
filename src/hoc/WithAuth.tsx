//importing hooks
import { useAuth } from '../hooks';
//with auth hoc
const WithAuth: React.FC = ({ children }) => {
  useAuth();
  return <>{children}</>;
};

export default WithAuth;
