import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux';
axios.defaults.baseURL = 'http://passport-api.test/api/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);