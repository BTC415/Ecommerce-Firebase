import { useAuth } from '../hooks';
import { withRouter } from 'react-router-dom';
import { PropsWithRouter } from '../state';

const WithAuth: React.FC<PropsWithRouter> = props => {
  useAuth(props);
  return <>{props.children}</>;
};

export default withRouter(WithAuth);
