import { Props, useAuth } from '../hooks';
import { withRouter } from 'react-router-dom';

const WithAuth: React.FC<Props> = props => {
  useAuth(props);
  return <>{props.children}</>;
};

export default withRouter(WithAuth);
