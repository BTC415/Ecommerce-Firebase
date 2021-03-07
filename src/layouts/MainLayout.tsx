//importing components
import Header from '../components/Header';
//main layout component
const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main__layout">
      <Header />
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default MainLayout;
