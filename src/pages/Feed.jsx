import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsImage, BsPaperclip, BsStarFill } from 'react-icons/bs';
import Post from '../components/Post';


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [onlineProfessionals, setOnlineProfessionals] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  const [recommendedProfessionals, setRecommendedProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      const dummyPosts = [
        {
          id: 201,
          username: 'José Silva lima',
          userPhoto: 'https://randomuser.me/api/portraits/men/42.jpg',
          date: '18 de maio de 2025',
          content: 'Acabei de finalizar a pintura desta casa no Jardim Paulista. Três dias de trabalho, mas ficou show! Cliente super satisfeito com o acabamento nas paredes texturizadas. #PintorProfissional 🎨',
          image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          comments: [
            {
              author: 'Marcos Oliveira',
              userPhoto: 'https://randomuser.me/api/portraits/men/33.jpg',
              text: 'Ficou top demais! Qual marca de tinta você usou?',
              date: '18/05/2025',
            },
            {
              author: 'Regina Santos',
              userPhoto: 'https://randomuser.me/api/portraits/women/55.jpg',
              text: 'Você cobra por m² ou valor fechado? Preciso pintar meu apartamento!',
              date: '18/05/2025',
            },
          ],
        },
        {
          id: 202,
          username: 'Marina Sousa',
          userPhoto: 'https://randomuser.me/api/portraits/women/32.jpg',
          date: '15 de maio de 2025',
          content: 'Dia produtivo! Atendi 4 clientes hoje fazendo escova progressiva a domicílio. Ainda tenho horários disponíveis para quinta e sexta. Quem quiser agendar é só chamar no WhatsApp! 💇‍♀️✨',
          image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          comments: [
            {
              author: 'Carolina Mendes',
              userPhoto: 'https://randomuser.me/api/portraits/women/43.jpg',
              text: 'Tem horário pra sábado de manhã? Preciso dar um trato no cabelo urgente!',
              date: '15/05/2025',
            },
            {
              author: 'Paula Ferreira',
              userPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
              text: 'Qual valor você cobra para luzes? Manda seu contato!',
              date: '15/05/2025',
            },
          ],
        },
        {
          id: 203,
          username: 'Antônio Carlos',
          userPhoto: 'https://randomuser.me/api/portraits/men/65.jpg',
          date: '14 de maio de 2025',
          content: 'Resolvido mais um problema de infiltração! Cliente estava com vazamento na caixa d\'água há semanas. Troquei os registros e instalei boia nova. Serviço garantido! 🚿🔧',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45249ff78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          comments: [
            {
              author: 'Roberto Alves',
              userPhoto: 'https://randomuser.me/api/portraits/men/22.jpg',
              text: 'Meu chuveiro está com problema na resistência. Você faz esse tipo de serviço também?',
              date: '14/05/2025',
            },
            {
              author: 'Márcia Santos',
              userPhoto: 'https://randomuser.me/api/portraits/women/23.jpg',
              text: 'Estou precisando trocar a torneira da cozinha. Quanto você cobra para vir aqui no Tatuapé?',
              date: '15/05/2025',
            },
          ],
        },
        {
          id: 204,
          username: 'Claudia Ferreira',
          userPhoto: 'https://randomuser.me/api/portraits/women/92.jpg',
          date: '12 de maio de 2025',
          content: 'Mais um dia de faxina concluído com sucesso! Atendi duas casas hoje, uma no Ipiranga e outra na Vila Mariana. Ainda estou com horários disponíveis para segundas e quartas. Serviço completo: limpeza geral, janelas e organização! 🧹✨',
          image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          comments: [
            {
              author: 'Luciana Martins',
              userPhoto: 'https://randomuser.me/api/portraits/women/28.jpg',
              text: 'Oi Claudia! Você faz limpeza pós-obra? Terminei uma reforma no meu ap.',
              date: '12/05/2025',
            },
            {
              author: 'Fernando Gomes',
              userPhoto: 'https://randomuser.me/api/portraits/men/28.jpg',
              text: 'Você trabalha com diária fixa semanal? Preciso para meu escritório.',
              date: '13/05/2025',
            },
          ],
        },
      ];

      const dummyOnlineProfessionals = [
        {
          id: 101,
          name: 'Carlos Pereira',
          photo: 'https://randomuser.me/api/portraits/men/75.jpg',
          specialty: 'Eletricista',
          status: 'online',
        },
        {
          id: 102,
          name: 'Joana Silva',
          photo: 'https://randomuser.me/api/portraits/women/63.jpg',
          specialty: 'Diarista',
          status: 'online',
        },
        {
          id: 103,
          name: 'Marcos Santos',
          photo: 'https://randomuser.me/api/portraits/men/41.jpg',
          specialty: 'Pedreiro',
          status: 'online',
        },
        {
          id: 104,
          name: 'Teresa Oliveira',
          photo: 'https://randomuser.me/api/portraits/women/90.jpg',
          specialty: 'Cuidadora de Idosos',
          status: 'away',
        },
        {
          id: 105,
          name: 'João Martins',
          photo: 'https://randomuser.me/api/portraits/men/32.jpg',
          specialty: 'Jardineiro',
          status: 'online',
        },
      ];

      const dummyPopularCategories = [
        { id: 1, name: 'Limpeza', count: 124 },
        { id: 2, name: 'Construção', count: 98 },
        { id: 3, name: 'Elétrica', count: 87 },
        { id: 4, name: 'Hidráulica', count: 76 },
        { id: 5, name: 'Pintura', count: 65 },
      ];

      const dummyRecommendedProfessionals = [
        {
          id: 201,
          name: 'Sandra Ribeiro',
          photo: 'https://randomuser.me/api/portraits/women/45.jpg',
          specialty: 'Cabeleireira',
          rating: 4.9,
        },
        {
          id: 202,
          name: 'José Gomes',
          photo: 'https://randomuser.me/api/portraits/men/67.jpg',
          specialty: 'Encanador',
          rating: 4.8,
        },
        {
          id: 203,
          name: 'Antônia Souza',
          photo: 'https://randomuser.me/api/portraits/women/33.jpg',
          specialty: 'Diarista',
          rating: 4.7,
        },
      ];

      setTimeout(() => {
        setPosts(dummyPosts);
        setOnlineProfessionals(dummyOnlineProfessionals);
        setPopularCategories(dummyPopularCategories);
        setRecommendedProfessionals(dummyRecommendedProfessionals);
        setLoading(false);
      }, 800);
    };

    loadData();
  }, []);

  const handleNewPost = (e) => {
    e.preventDefault();
    
    if (newPostText.trim()) {
      const newPost = {
        id: Date.now(),
        username: 'Seu Nome',
        userPhoto: 'https://randomuser.me/api/portraits/women/17.jpg', 
        date: new Date().toLocaleDateString('pt-BR', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        content: newPostText,
        image: '',
        comments: [],
      };

      setPosts([newPost, ...posts]);
      setNewPostText('');
    }
  };

  if (loading) {
    return (
      <Container className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-3">Carregando feed...</p>
      </Container>
    );
  }

  return (
    <Container fluid className="py-4">
      <Row>
        <Col lg={7} className="mx-auto">
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="https://randomuser.me/api/portraits/women/17.jpg"
                  roundedCircle
                  width={40}
                  height={40}
                  className="me-3"
                />
                <h6 className="mb-0">O que você deseja compartilhar hoje?</h6>
              </div>
              <Form onSubmit={handleNewPost}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Escreva seu post aqui..."
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Button variant="outline-secondary" size="sm" className="me-2">
                      <BsImage className="me-1" /> Foto
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      <BsPaperclip className="me-1" /> Anexo
                    </Button>
                  </div>
                  <Button type="submit" variant="primary">
                    Publicar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-sm">
            <Card.Body className="p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <Button variant="outline-primary" className="me-2" size="sm">Recentes</Button>
                  <Button variant="outline-secondary" className="me-2" size="sm">Populares</Button>
                  <Button variant="outline-secondary" size="sm">Seguindo</Button>
                </div>
                <div>
                  <Form.Select size="sm">
                    <option>Todas categorias</option>
                    <option>Limpeza</option>
                    <option>Construção</option>
                    <option>Elétrica</option>
                    <option>Hidráulica</option>
                    <option>Pintura</option>
                    <option>Cuidados</option>
                    <option>Jardinagem</option>
                  </Form.Select>
                </div>
              </div>
            </Card.Body>
          </Card>

          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Col>

        <Col lg={3} className="d-none d-lg-block">
          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Profissionais Online</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="list-group list-group-flush">
                {onlineProfessionals.map(professional => (
                  <Link 
                    to={`/prestador/${professional.id}`} 
                    className="list-group-item list-group-item-action" 
                    key={professional.id}
                  >
                    <div className="d-flex align-items-center">
                      <div className="position-relative">
                        <Image 
                          src={professional.photo} 
                          roundedCircle 
                          width={40} 
                          height={40}
                          className="me-3"
                        />
                        <span 
                          className={`position-absolute bottom-0 end-0 p-1 bg-${professional.status === 'online' ? 'success' : 'warning'} border border-light rounded-circle`}
                          style={{ width: '12px', height: '12px' }}
                        ></span>
                      </div>
                      <div>
                        <h6 className="mb-0">{professional.name}</h6>
                        <small className="text-muted">{professional.specialty}</small>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <Link to="/buscar-prestadores" className="text-decoration-none">Ver todos</Link>
            </Card.Footer>
          </Card>

          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Categorias Populares</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap gap-2">
                {popularCategories.map(category => (
                  <Badge 
                    bg="secondary"
                    key={category.id}
                    className="px-3 py-2 d-flex align-items-center"
                  >
                    {category.name}
                    <Badge bg="primary" pill className="ms-2">
                      {category.count}
                    </Badge>
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Recomendados para você</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="list-group list-group-flush">
                {recommendedProfessionals.map(professional => (
                  <Link 
                    to={`/prestador/${professional.id}`} 
                    className="list-group-item list-group-item-action" 
                    key={professional.id}
                  >
                    <div className="d-flex align-items-center">
                      <Image 
                        src={professional.photo} 
                        roundedCircle 
                        width={40} 
                        height={40}
                        className="me-3"
                      />
                      <div>
                        <h6 className="mb-0">{professional.name}</h6>
                        <div className="d-flex align-items-center">
                          <small className="text-muted me-2">{professional.specialty}</small>
                          <small className="text-warning d-flex align-items-center">
                            <BsStarFill className="me-1" /> {professional.rating}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <Link to="/buscar-prestadores" className="text-decoration-none">Explorar mais</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;