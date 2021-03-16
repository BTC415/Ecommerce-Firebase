//importing router utils
import { Link } from 'react-router-dom';
//admin bar component
const AdminToolbar = () => {
  return (
    <div className="admin__toolbar">
      <ul>
        <li>
          <Link to="/admin">My admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminToolbar;
