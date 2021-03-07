//importing firebase
import firebase from 'firebase/app';
//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
//layout interface
interface MainLayoutProps {
  currentUser: firebase.User | null;
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
