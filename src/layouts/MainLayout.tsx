//importing firebase
import firebase from 'firebase/app';
//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
import { CurrentUser } from '../state';
//layout interface
interface MainLayoutProps {
  currentUser: CurrentUser;
}
//main layout component
const MainLayout: React.FC<MainLayoutProps> = ({ children, ...otherProps }) => {
  return (
    <div className="main__layout">
      <Header {...otherProps} />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
