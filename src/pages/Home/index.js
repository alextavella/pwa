import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

import { Container } from './styles';

export default function Home() {
  const [hello, setHello] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await api.get('/hello');
      setHello(response.data);
    }

    load();
  }, []);

  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
        {hello && (
          <>
            <p>{hello.message}</p>
            <p>{hello.today}</p>
            <p>{hello.date}</p>
            <p>{hello.timer}</p>
          </>
        )}
        <Link to="/pwa/example">
          Example
        </Link>
      </header>
    </Container>
  );
}
