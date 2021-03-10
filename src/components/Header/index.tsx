//importing hooks
import { useTypedSelector } from '../../hooks';
//importing firebase & utilities
import { auth } from '../..//firebase/utils';
//router link
import { Link } from 'react-router-dom';
//header component
const Header: React.FC = () => {
  //redux state
  const currentUser = useTypedSelector(state => state.user);
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
              <li>
                <Link to="/account">My Account</Link>
              </li>
              <li onClick={() => auth.signOut()} className="log__out">
                LogOut
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul className="registration__list">
              <li>
                <Link to="/account">My Account</Link>
              </li>
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
