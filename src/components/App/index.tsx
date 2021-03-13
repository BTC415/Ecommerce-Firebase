//importing styles
import '../../styles/css/default.css';
//importing hooks & auth
import { useEffect } from 'react';
import { auth, handleUserProfile } from '../../firebase/utils';
import { useActions } from '../../hooks';
//importing higher order components
import WithAuth from '../../hoc/WithAuth';
//importing pages
import Homepage from '../../pages/Homepage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Account from '../../pages/Account';
import Recovery from '../../pages/Recovery';
//importing router utils
import { Route } from 'react-router';
//importing layouts
import MainLayout from '../../layouts/MainLayout';
//app component
const App: React.FC = () => {
  //redux action & state
  const { setCurrentUser } = useActions();
  //checking if user is signed in on first render
  // useEffect(() => {

  //   // cleanup
  //   return () => authListener();
  // }, [setCurrentUser]);
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
      <Route
        path="/recovery"
        render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
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
    </div>
  );
};

export default App;
