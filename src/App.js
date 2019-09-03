import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Example from './pages/Example';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/pwa" exact component={Home} />
      <Route path="/pwa/example" component={Example} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}
