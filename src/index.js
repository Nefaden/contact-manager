import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/store';
import App from './App';
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);