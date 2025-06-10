import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup, Accordion } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext.jsx'; // Importando o hook do nosso contexto

const ConfiguracoesPage = () => {
  // Usando o estado e a função do nosso contexto global
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleAjudaClick = () => {
    alert('Você será direcionado para a central de ajuda!');
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Configurações ⚙️</h1>
          <p className="text-center text-muted">
            Gerencie suas preferências e informações da conta.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mx-auto">
          <Accordion defaultActiveKey="0" alwaysOpen>
            {/* Seção de Perfil com conteúdo restaurado */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Informações do Perfil</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                        <Form.Label column sm="3">
                          Nome Completo
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control type="text" placeholder="Seu Nome Completo" defaultValue="Usuário Exemplo" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="3">
                          Email
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control type="email" placeholder="seuemail@example.com" defaultValue="usuario@exemplo.com" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                        <Form.Label column sm="3">
                          Telefone
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control type="tel" placeholder="(00) 00000-0000" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                          Foto de Perfil
                        </Form.Label>
                        <Col sm="9">
                          <Form.Control type="file" />
                          <Form.Text className="text-muted">
                            Use uma imagem JPG, PNG ou GIF. Tamanho máximo de 2MB.
                          </Form.Text>
                        </Col>
                      </Form.Group>
                      <div className="text-end">
                        <Button variant="primary">Salvar Perfil</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>

            {/* Seção de Notificações com conteúdo restaurado */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Preferências de Notificação</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        Notificações por Email
                        <Form.Check type="switch" id="email-notifications" defaultChecked />
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        Novas mensagens de clientes
                        <Form.Check type="switch" id="client-messages-notifications" defaultChecked />
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        Atualizações de cursos
                        <Form.Check type="switch" id="course-updates-notifications" />
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        Promoções e novidades
                        <Form.Check type="switch" id="promotions-notifications" defaultChecked/>
                      </ListGroup.Item>
                    </ListGroup>
                    <div className="text-end mt-3">
                      <Button variant="primary">Salvar Preferências</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            
            {/* Seção de Aparência */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Aparência</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <Form.Group as={Row} className="align-items-center">
                      <Form.Label column sm="3">
                        Modo Escuro
                      </Form.Label>
                      <Col sm="9">
                        <Form.Check
                          type="switch"
                          id="dark-mode-switch"
                          label="Ativar modo escuro"
                          checked={isDarkMode}
                          onChange={toggleDarkMode}
                        />
                      </Col>
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>

            {/* Seção de Conta com conteúdo restaurado */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Conta</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item action>
                        Alterar Senha
                      </ListGroup.Item>
                      <ListGroup.Item action>
                        Ver Histórico de Atividade
                      </ListGroup.Item>
                      <ListGroup.Item action variant="danger" className="text-danger">
                        Excluir Minha Conta
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          
          <div className="text-center mt-4">
            <Button
              variant="outline-secondary"
              size="lg"
              className="rounded-pill"
              onClick={handleAjudaClick}
            >
              Preciso de ajuda
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfiguracoesPage;