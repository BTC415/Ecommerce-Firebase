//importing styles
import '../../styles/css/default.css';
//importing components
import Homepage from '../../pages/Homepage';
import Header from '../Header';
import Registration from '../../pages/Registration';
//importing route
import { Route } from 'react-router';
//app component
const App: React.FC = () => {
  return (
    <div className="app__container">
      <Header />
      <div className="wrapper">
        <Route path="/" component={Homepage} exact />
        <Route path="/registration" component={Registration} />
      </div>
    </div>
  );
};

export default App;
