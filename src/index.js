import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register(() => ({
  onUpdate: (registration) => {
    console.log('onUpdate', registration);
  },
  onSuccess: (registration) => {
    console.log('onSuccess', registration);
  },
}));
