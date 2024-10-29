import { Container, Nav, Navbar } from "react-bootstrap";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Caterly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavigationLink label="Strona główna" path="dashboard" />
            <NavigationLink label="Posiłki" path="meals" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
