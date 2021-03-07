//importing styles
import '../../styles/css/default.css';
//importing pages
import Homepage from '../../pages/Homepage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
//importing route
import { Route } from 'react-router';
//importing layouts
import MainLayout from '../../layouts/MainLayout';
//app component
const App: React.FC = () => {
  return (
    <div className="app__container">
      <Route
        path="/"
        exact
        render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )}
      />
      <Route
        path="/registration"
        render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )}
      />
    </div>
  );
};

export default App;
