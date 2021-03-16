//importing styles
import '../../styles/css/default.css';
//importing hooks
import { useActions } from '../../hooks';
import { useEffect } from 'react';
//importing components
import AdminToolbar from '../AdminToolbar';
//importing higher order components
import WithAuth from '../../hoc/WithAuth';
import WithAdminAuth from '../../hoc/WithAdminAuth';
//importing pages
import Homepage from '../../pages/Homepage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Account from '../../pages/Account';
import Recovery from '../../pages/Recovery';
import Admin from '../../pages/Admin';
//importing router utils
import { Route, Switch } from 'react-router';
//importing layouts
import MainLayout from '../../layouts/MainLayout';
import AdminLayout from '../../layouts/AdminLayout';
//app component
const App: React.FC = () => {
  //redux action & state
  const { checkUserSession } = useActions();
  //checking if user is signed in on first render
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div className="app__container">
      <AdminToolbar />
      <Switch>
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
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
        <Route
          path="/account"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Account />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
