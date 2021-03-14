import { useAuth } from '../hooks';

const WithAuth: React.FC = props => {
  useAuth();
  return <>{props.children}</>;
};

export default WithAuth;
