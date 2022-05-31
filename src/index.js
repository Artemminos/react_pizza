import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import 'antd/dist/antd.css';
import './scss/app.scss';
import App from './App';

ReactDOM.render(
  <Router>{/*обертка для навигация*/}
    <Provider store={store}> {/*обертка для стора*/}
      <App /> {/*наше приложение */}
    </Provider>
  </Router>,
  document.getElementById('root'),
);
