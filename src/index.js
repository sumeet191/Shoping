import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configure-store';
import App from './App';
import './index.css';
const rootEl = document.querySelector('#root');

const render = Component => {
  ReactDOM.render(
      <Component store={store} />,
    rootEl
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(NextApp);
  });
}
