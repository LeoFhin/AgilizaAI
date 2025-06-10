import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="shadow-sm navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/feed">
          <img 
            src='/logoAgilizaAI2.jpg' 
            alt='logo AgilizaAI' 
            style={{ height: '50px', transform: 'scale(1.4)' }} 
            className="logo-image" 
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/feed">Início</Nav.Link>
            <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link> 
            <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
            <Nav.Link as={Link} to="/perfil">Meu Perfil</Nav.Link>
            <Nav.Link as={Link} to="/configuracoes">Configurações</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;