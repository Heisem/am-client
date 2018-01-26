import React from 'react';
import { Link } from 'react-router-dom'

import logo from './logo-almundo.svg';

export const Header = () => (
  <header className="d-flex align-items-center">
    <div className="container">
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
    </div>
  </header>
);
