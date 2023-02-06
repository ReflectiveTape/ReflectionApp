import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Hooks } from '../utils'
import Authenticator from './Authenticator'

export default function NavBar() {
  const { user } = Hooks.useAuth()

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">NameHere</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user ? <Nav.Link as={Link} to="/page-oone">Secret Logged In Page</Nav.Link> : null}
            <Nav.Link as={Link} to="/page-oone">Student Progress</Nav.Link>
            <Nav.Link as={Link} to="/page-twooo">Make Questions</Nav.Link>
            <Nav.Link as={Link} to="/page-three">Page 3</Nav.Link>
            <Nav.Link as={Link} to="/counter-example">Counter</Nav.Link>
            <Nav.Link as={Link} to="/layout-example">Layout</Nav.Link>
            <Nav.Link as={Link} to="/todo-example">To Do List</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Authenticator />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

