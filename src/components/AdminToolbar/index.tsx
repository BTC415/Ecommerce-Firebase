//importing hooks
import { useTypedSelector } from '../../hooks';
//importing router utils
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from '../../Utils';
//admin bar component
const AdminToolbar = () => {
  //redux state
  const { currentUser } = useTypedSelector(state => state.user);
  //hiding tool bar if not admin
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
