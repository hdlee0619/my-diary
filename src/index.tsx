import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';
import store from './redux/config/configStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
