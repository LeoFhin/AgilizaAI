import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Form, InputGroup, Button } from 'react-bootstrap';
import ClientListItem from '../components/ClientListItem'; 
import { clientsData } from '../data/clientsData'; 

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); 

  const filteredClients = clientsData
    .filter(client => {
      if (filter === 'new_messages') return client.hasNewMessage;
      if (filter === 'online') return client.isOnline;
      return true;
    })
    .filter(client =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Meus Clientes 💬</h1>
          <p className="text-center text-muted">
            Acompanhe suas conversas e projetos.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Buscar cliente pelo nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => setSearchTerm('')}>Limpar</Button>
          </InputGroup>
        </Col>
        <Col md={4} className="mt-2 mt-md-0">
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos os Clientes</option>
            <option value="new_messages">Com Novas Mensagens</option>
            <option value="online">Online Agora</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          {filteredClients.length > 0 ? (
            <ListGroup variant="flush" className="shadow-sm rounded">
              {filteredClients.map(client => (
                <ClientListItem key={client.id} client={client} />
              ))}
            </ListGroup>
          ) : (
            <p className="text-center text-muted">Nenhum cliente encontrado com os filtros atuais.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ClientsPage;