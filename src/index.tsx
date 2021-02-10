import ReactDOM from 'react-dom';
import App from './components/App';
//importing provider & store
import { Provider } from 'react-redux';
import { store } from './state';
//rendering
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
