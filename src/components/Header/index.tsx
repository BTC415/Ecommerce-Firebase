//importing firebase & utilities
import { auth } from '../..//firebase/utils';
//router link
import { Link } from 'react-router-dom';
import { CurrentUser } from '../../state';
//header props
interface HeaderProps {
  currentUser: CurrentUser;
}
//header component
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header>
      <div className="container">
        <div className="logo__container">
          <Link to="/" className="logo__link">
            <h1>Shoply</h1>
          </Link>
        </div>
        <div className="registration">
          {currentUser && (
            <ul className="registration__list">
              <li onClick={() => auth.signOut()} className="log__out">
                LogOut
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul className="registration__list">
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
