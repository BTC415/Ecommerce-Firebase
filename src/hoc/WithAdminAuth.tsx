//importing hooks
import { useAdminAuth } from '../hooks';
//with admin hoc
const WithAdminAuth: React.FC = ({ children }) => {
  useAdminAuth();
  return <>{children}</>;
};

export default WithAdminAuth;
