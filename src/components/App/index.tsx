//importing styles
import '../../styles/css/default.css';
//importing hooks & auth
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/utils';
import firebase from 'firebase/app';
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
  //local State
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  //checking if user is signed in on first render
  useEffect(() => {
    const authListener = auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        setCurrentUser(null);
      }
      setCurrentUser(userAuth);
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
        render={() => (
          <MainLayout currentUser={currentUser}>
            <Login />
          </MainLayout>
        )}
      />
    </div>
  );
};

export default App;
