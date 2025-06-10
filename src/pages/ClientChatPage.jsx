import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image, Form, Button, InputGroup, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { clientsData } from '../data/clientsData';
import MessageBubble from '../components/MessageBubble';
import { BsTelephoneFill, BsMicFill, BsArrowLeft } from 'react-icons/bs'; 

const ClientChatPage = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // ... (lógica de useEffect e handlers permanece a mesma) ...
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
      {/* CABEÇALHO DO CHAT */}
      <Row className="mb-3 align-items-center">
        <Col xs="auto" className="pe-0">
          <Button
            // ALTERADO: de 'light' para uma variante mais neutra
            variant="outline-secondary" 
            onClick={() => navigate('/clientes')}
            className="d-flex align-items-center"
            aria-label="Voltar para lista de clientes"
          >
            <BsArrowLeft className="me-1" size={16} />
            Voltar
          </Button>
        </Col>

        <Col>
          {/* Card do topo não precisa de 'bg-white', ele já herda a cor correta */}
          <Card className="shadow-sm">
            <Card.Body className="p-2">
              <Row className="align-items-center">
                <Col xs="auto">
                  <Image
                    src={client.photoUrl || 'https://via.placeholder.com/40?text=Cli'}
                    roundedCircle
                    width={40}
                    height={40}
                  />
                </Col>
                <Col className="d-flex flex-column">
                  <h6 className="mb-0">{client.name}</h6>
                  <small className="text-muted">{client.isOnline ? 'Online' : 'Offline'}</small>
                </Col>
                <Col xs="auto">
                  <Button
                    // ALTERADO: de 'light' para uma variante neutra
                    variant="outline-secondary" 
                    className="p-2 rounded-circle shadow-sm"
                    aria-label="Ligar para cliente"
                  >
                    <BsTelephoneFill size={20} className="text-success" />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ÁREA DAS MENSAGENS */}
      <div
        // REMOVIDO: 'bg-light'. Adicionamos uma classe customizada 'chat-area'
        className="flex-grow-1 overflow-auto mb-3 p-3 rounded shadow-sm chat-area"
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        {(client.messages || []).map(msg => (
          <MessageBubble key={msg.id} message={msg} isMe={msg.sender === 'me'} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT DE NOVA MENSAGEM */}
      <Form onSubmit={handleSendMessage}>
        <InputGroup className="shadow-sm">
          <Form.Control
            type="text"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            aria-label="Mensagem"
          />
          <Button
            // ALTERADO: de 'light' para uma variante neutra
            variant="outline-secondary"
            type="button"
            aria-label="Enviar mensagem de áudio"
          >
            <BsMicFill size={20} className="text-danger" />
          </Button>
          <Button variant="primary" type="submit" disabled={!newMessage.trim()}>
            Enviar
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default ClientChatPage;