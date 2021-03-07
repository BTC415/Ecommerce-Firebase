//importing components
import Footer from '../components/Footer';
import Header from '../components/Header';
//main layout component
const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main__layout">
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
