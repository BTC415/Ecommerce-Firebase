//importing styles
import '../../styles/css/default.css';
//importing hooks & auth
import { useEffect, useState } from 'react';
import { auth, handleUserProfile } from '../../firebase/utils';
//importing pages
import Homepage from '../../pages/Homepage';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
//importing route
import { Redirect, Route } from 'react-router';
//importing layouts
import MainLayout from '../../layouts/MainLayout';
//importing types
import { CurrentUser } from '../../state';
//app component
const App: React.FC = () => {
  //local State
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
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
  }, []);
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
        render={() => (
          <MainLayout currentUser={currentUser}>
            <Registration />
          </MainLayout>
        )}
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
    </div>
  );
};

export default App;
