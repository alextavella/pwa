import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const swListener = {
  onUpdate: (registration) => {
    console.log('SW onUpdate', registration);
  },
  onSuccess: (registration) => {
    console.log('SW onSuccess', registration);
  }
}

serviceWorker.register(swListener);
// serviceWorker.unregister();

console.log('isLocalhost', serviceWorker.isLocalhost);
