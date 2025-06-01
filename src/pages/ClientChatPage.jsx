import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Form, Button, InputGroup, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom'; // Removido Link se não for mais usado diretamente aqui
import { clientsData } from '../data/clientsData';
import MessageBubble from '../components/MessageBubble';

const ClientChatPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // ... (useEffect para buscar client e para scroll - como antes)
  useEffect(() => {
    const currentClient = clientsData.find(c => c.id === clientId);
    if (currentClient) {
      currentClient.hasNewMessage = false;
      currentClient.newMessageCount = 0;
      setClient(currentClient);
    } else {
      navigate('/clientes');
    }
  }, [clientId, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [client?.messages]);

  const handleSendMessage = (e) => {
    // ... (como antes)
    e.preventDefault();
    if (newMessage.trim() === '' || !client) return;

    const messageToSend = {
      id: `msg${Date.now()}`,
      sender: 'me',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setClient(prevClient => ({
      ...prevClient,
      messages: [...(prevClient.messages || []), messageToSend]
    }));
    setNewMessage('');
  };


  if (!client) {
    return (
        <Container className="text-center py-5">
            <p>Carregando dados do cliente...</p>
        </Container>
    );
  }

  return (
    <Container fluid="md" className="d-flex flex-column vh-100 py-3">
      {/* Nova linha para Botão Voltar e Cabeçalho do Chat */}
      <Row className="mb-3 align-items-center"> {/* align-items-center para alinhar verticalmente */}
        {/* Coluna para o Botão Voltar */}
        <Col xs="auto" className="pe-0"> {/* pe-0 para remover padding à direita se necessário */}
          <Button
              variant="light"
              onClick={() => navigate('/clientes')}
              className="d-flex align-items-center"
              aria-label="Voltar para lista de clientes"
          >
              <i className="bi bi-arrow-left me-1"></i>
              &larr; Voltar
          </Button>
        </Col>

        {/* Coluna para o Cabeçalho do Chat (Card) */}
        <Col>
          <Card className="shadow-sm">
            <Card.Body className="p-2">
                <Row className="align-items-center">
                    {/* A foto do cliente agora é a primeira coisa dentro do card */}
                    <Col xs="auto">
                      <Image src={client.photoUrl || 'https://via.placeholder.com/40?text=Cli'} roundedCircle width={40} height={40} />
                    </Col>
                    <Col>
                      <h6 className="mb-0">{client.name}</h6>
                      <small className="text-muted">{client.isOnline ? 'Online' : 'Offline'}</small>
                    </Col>
                    {/* Aqui poderiam entrar outros ícones de ação, como ligar, ver perfil, etc. */}
                    {/* Exemplo:
                    <Col xs="auto">
                        <Button variant="link" className="text-secondary p-0"><i className="bi bi-telephone"></i></Button>
                        <Button variant="link" className="text-secondary p-0 ms-2"><i className="bi bi-three-dots-vertical"></i></Button>
                    </Col>
                    */}
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Área de Mensagens (como antes) */}
      <div className="flex-grow-1 overflow-auto mb-3 p-3 bg-light rounded shadow-sm" style={{maxHeight: 'calc(100vh - 200px)'}}>
        {(client.messages || []).map(msg => (
          <MessageBubble key={msg.id} message={msg} isMe={msg.sender === 'me'} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de Mensagem (como antes) */}
      <Form onSubmit={handleSendMessage}>
        {/* ... (InputGroup como antes) ... */}
        <InputGroup className="shadow-sm">
          <Form.Control
            type="text"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            aria-label="Mensagem"
          />
          <Button variant="primary" type="submit" disabled={!newMessage.trim()}>
            <i className="bi bi-send-fill"></i> Enviar
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default ClientChatPage;