import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Example() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">
          Home
        </Link>
      </header>
    </Container>
  );
}
