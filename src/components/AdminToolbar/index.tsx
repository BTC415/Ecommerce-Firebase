//importing hooks
import { useTypedSelector } from '../../hooks';
//importing router utils
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from '../../Utils';

const AdminToolbar = () => {
  const { currentUser } = useTypedSelector(state => state.user);
  
  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;
  return (
    <div className="admin__toolbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/admin">My admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminToolbar;
