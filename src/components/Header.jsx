// Header.jsx atualizado
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo (pode ser imagem futuramente) */}
        <Navbar.Brand as={Link} to="/feed">
          {/* Substitua por imagem da logo se quiser */}
          <strong>Joba</strong>
        </Navbar.Brand>
        
        {/* Botão hambúrguer para mobile */}
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

