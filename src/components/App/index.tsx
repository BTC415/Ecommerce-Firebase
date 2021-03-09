//importing styles
import '../../styles/css/default.css';
//importing hooks & auth
import { useEffect } from 'react';
import { auth, handleUserProfile } from '../../firebase/utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
//importing pages
import Homepage from '../../pages/Homepage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
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
      //clean up if user is signed out
      setCurrentUser(null);
    });
    // clean up
    return () => authListener();
  }, [setCurrentUser]);
  return (
    <div className="app__container">
      <Route
        path="/"
        exact
        render={() => (
          <MainLayout currentUser={currentUser}>
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
            <MainLayout currentUser={currentUser}>
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
            <MainLayout currentUser={currentUser}>
              <Login />
            </MainLayout>
          )
        }
      />
      <Route
        path="/recovery"
        render={() => (
          <MainLayout currentUser={currentUser}>
            <Recovery />
          </MainLayout>
        )}
      />
    </div>
  );
};

export default App;
