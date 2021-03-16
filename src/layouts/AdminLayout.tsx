//importing hooks
import { useActions } from '../hooks';
//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
import VerticalNav from '../components/VerticalNav';
//importing router utils
import { Link } from 'react-router-dom';
//admin layout component
const AdminLayout: React.FC = ({ children, ...otherProps }) => {
  //redux actions
  const { emailSignOutStart } = useActions();
  return (
    <div className="admin__layout">
      <Header {...otherProps} />
      <div className="control__panel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li className="home">
                <Link to="/account">Home</Link>
              </li>
              <li className="sign__out" onClick={() => emailSignOutStart()}>
                <span>Sign Out</span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
