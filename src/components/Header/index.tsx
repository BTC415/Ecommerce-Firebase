//importing hooks
import { useTypedSelector, useUserActions } from '../../hooks';
import { selectCartItemsCount } from '../../state';
//importing utils
import { Link } from 'react-router-dom';
//importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const { currentUser } = useTypedSelector(state => state.user);

  const totalCartItems = useTypedSelector(state => selectCartItemsCount(state));

  const { emailSignOutStart } = useUserActions();

  return (
    <header>
      <div className="container">
        <div className="logo__container">
          <Link to="/" className="logo__link">
            <h1>Shoply</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
        <div className="registration">
          <ul className="registration__list">
            <Link to="/cart">
              <li className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>({totalCartItems})</span>
              </li>
            </Link>
            {currentUser && (
              <>
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li onClick={() => emailSignOutStart()} className="log__out">
                  LogOut
                </li>
              </>
            )}
            {!currentUser && (
              <>
                <li>
                  <Link to="/registration">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
