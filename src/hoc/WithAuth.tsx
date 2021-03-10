import { useAuth } from '../hooks';
import { Props } from '../hooks';

const WithAuth: React.FC<Props> = props => (
  <>{useAuth(props) && props.children}</>
);

export default WithAuth;
