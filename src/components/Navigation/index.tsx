import React from 'react';

import { Link } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, Container } from "reactstrap";

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <Navbar color="light" light sticky='top' expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">🗒️</NavbarBrand>
        <Nav className="mr-auto" navbar/>
      </Container>
    </Navbar>
  );
}

export default Navigation;
