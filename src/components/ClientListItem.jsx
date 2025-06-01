import React from 'react';
import { ListGroup, Image, Badge, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClientListItem = ({ client }) => {
  const itemStyle = {
    backgroundColor: client.hasNewMessage ? '#eef7ff' : '#fff', // Destaca se tem nova mensagem
    cursor: 'pointer', // Indica que é clicável
  };

  return (
    <ListGroup.Item
      as={Link} // Faz o item ser um link
      to={`/clientes/conversa/${client.id}`} // Rota de exemplo para conversa/detalhe
      className="p-3 border-bottom"
      style={itemStyle}
      action // Adiciona efeito de hover
    >
      <Row className="align-items-center">
        <Col xs="auto" className="pe-0">
          <div className="position-relative">
            <Image
              src={client.photoUrl || 'https://via.placeholder.com/60?text=Cli'}
              roundedCircle
              width={60}
              height={60}
              className="me-3 border"
            />
            {client.isOnline && (
              <Badge
                pill
                bg="success"
                className="position-absolute bottom-0 start-0 ms-2 mb-1 border border-light"
                style={{ transform: 'translate(35px, 5px)', padding: '0.35em' }} // Ajuste fino da posição
              >
                <span className="visually-hidden">Online</span>
              </Badge>
            )}
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-between align-items-start">
            <h6 className={`mb-1 ${client.hasNewMessage ? 'fw-bold' : ''}`}>{client.name}</h6>
            <small className="text-muted">{client.lastMessageTimestamp}</small>
          </div>
          <p className={`mb-1 small text-muted ${client.hasNewMessage ? 'text-primary' : ''}`} style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '90%' // Evita que o texto quebre o layout
          }}>
            {client.lastMessagePreview}
          </p>
        </Col>
        {client.hasNewMessage && client.newMessageCount > 0 && (
          <Col xs="auto" className="d-flex align-items-center">
            <Badge pill bg="primary">
              {client.newMessageCount}
            </Badge>
          </Col>
        )}
      </Row>
    </ListGroup.Item>
  );
};

export default ClientListItem;