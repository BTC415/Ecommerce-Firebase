//router link
import { Link } from 'react-router-dom';
//header component
const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <div className="logo__container">
          <Link to="/" className="logo__link">
            <h1>Shoply</h1>
          </Link>
        </div>
        <div className="registration">
          <ul className="registration__list">
            <li>
              <Link to="/registration" className="registration__link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="registration__link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
