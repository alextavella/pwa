import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Example from './pages/Example';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pwa" exact component={Home} />
        <Route path="/pwa/example" component={Example} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
