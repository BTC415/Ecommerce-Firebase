//importing styles
import '../../styles/css/default.css';
//importing hooks & auth
import { useEffect } from 'react';
import { auth, handleUserProfile } from '../../firebase/utils';
import { useTypedSelector, useActions } from '../../hooks';
//importing higher order components
import WithAuth from '../../hoc/WithAuth';
//importing pages
import Homepage from '../../pages/Homepage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Account from '../../pages/Account';
import Recovery from '../../pages/Recovery';
//importing route
import { Redirect, Route } from 'react-router';
//importing layouts
import MainLayout from '../../layouts/MainLayout';
//app component
const App: React.FC = () => {
  //redux action & state
  const { setCurrentUser } = useActions();
  const currentUser = useTypedSelector(state => state.user);
  //checking if user is signed in on first render
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //getting currentUser object
        const userRef = await handleUserProfile(userAuth);
        //updating state when user changes
        userRef?.onSnapshot(snapshot => {
          if (snapshot.exists) {
            setCurrentUser({
              id: snapshot.id,
              displayName: snapshot.data()?.displayName,
              email: snapshot.data()?.email,
            });
          }
        });
      }
      //cleanup if user is signed out
      setCurrentUser(null);
    });
    // cleanup
    return () => authListener();
  }, [setCurrentUser]);
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
        render={() =>
          currentUser ? (
            <Redirect to="/" />
          ) : (
            <MainLayout>
              <Registration />
            </MainLayout>
          )
        }
      />
      <Route
        path="/login"
        render={() =>
          currentUser ? (
            <Redirect to="/" />
          ) : (
            <MainLayout>
              <Login />
            </MainLayout>
          )
        }
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
