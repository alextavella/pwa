import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

import { Container } from './styles';

export default function Home() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await api.get('/5d6e949432000075a0a8a9cf');
      setMessage(response.data.message);
    }

    load();
  }, []);

  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {message}
        </p>
        <Link to="/example">
          Example
        </Link>
      </header>
    </Container>
  );
}
