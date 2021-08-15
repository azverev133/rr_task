import React from "react";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import './Header.scss';

export const Header = props => (
  <Navbar bg="dark" variant="dark" className="main-header">
    <Container>
      <Navbar.Brand>
        <Link to="/">Example</Link>
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
          <Link to="/articles" onClick={() => props.onNavigate('/articles')}>Articles</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/users" onClick={() => props.onNavigate('/users')}>Users</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/photos" onClick={() => props.onNavigate('/photos')}>Photos</Link>
        </Nav.Link>
      </Nav>
      <Navbar.Text>
        My github: <a href="https://github.com/azverev133">azverev133</a>
      </Navbar.Text>
    </Container>
  </Navbar>
)
