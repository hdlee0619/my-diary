import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import App from './App';
import store from './redux/config/configStore';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
);
