//importing styles
import '../../styles/css/default.css';
//importing hooks
import { useUserActions } from '../../hooks';
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
import Search from '../../pages/Search';
import ProductDetails from '../../pages/ProductDetails';
import Cart from '../../pages/Cart';
import Order from '../../pages/Order';
import Payment from '../../pages/Payment';
//importing router utils
import { Route, Switch } from 'react-router';
//importing layouts
import MainLayout from '../../layouts/MainLayout';
import AdminLayout from '../../layouts/AdminLayout';

const App: React.FC = () => {
  const { checkUserSession } = useUserActions();

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
          path="/search"
          exact
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <MainLayout>
              <Cart />
            </MainLayout>
          )}
        />
        <Route
          path="/payment"
          render={() => (
            <MainLayout>
              <WithAuth>
                <Payment />
              </WithAuth>
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
          path="/order/:orderId"
          render={() => (
            <WithAuth>
              <AdminLayout>
                <Order />
              </AdminLayout>
            </WithAuth>
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
              <AdminLayout>
                <Account />
              </AdminLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
