import React from 'react';
import NavLink from './NavLink';
import styled from 'styled-components';

const Navbar = ({ className }) => (
  <nav className={className}>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/createaccount">Create Account</NavLink>
  </nav>
);

export default styled(Navbar)`

`;
