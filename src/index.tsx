import ReactDOM from 'react-dom';
import App from './components/App';
//importing provider & store & router
import { Provider } from 'react-redux';
import { store, persistor } from './state';
import { BrowserRouter } from 'react-router-dom';
//redux persist gate
import { PersistGate } from 'redux-persist/integration/react';
//rendering
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
