import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './i18next';

import { App } from './App';
import { store } from './store';

import 'antd/dist/reset.css';
import './styles/base/_reset.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
