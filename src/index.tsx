import ReactDOM from 'react-dom';
import App from './components/App';
//importing provider & store & router
import { Provider } from 'react-redux';
import { store } from './state';
import { BrowserRouter } from 'react-router-dom';
//rendering
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
