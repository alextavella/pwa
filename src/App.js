import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Example from './pages/Example';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/example" component={Example} />
    </BrowserRouter>
  );
}
