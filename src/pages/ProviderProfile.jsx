import { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Nav, Spinner } from 'react-bootstrap';
import Post from '../components/Post';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStar, BsGeoAltFill, BsEnvelope, BsTelephone } from 'react-icons/bs';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];
  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      i <= rating 
        ? <BsStarFill key={i} className="text-warning me-1" />
        : <BsStar key={i} className="text-warning me-1" />
    );
  }
  return <>{stars}</>;
};

const ProviderProfile = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    const fetchProviderData = () => {
        const mockReviews = [
            { id: 'rev001', author: "Carlos Almeida", authorPhoto: "https://randomuser.me/api/portraits/men/35.jpg", rating: 5, date: "20 de Maio de 2025", comment: "A Maria foi sensacional! Transformou minha sala de estar num ambiente super aconchegante e moderno. Entendeu perfeitamente o que eu queria. Recomendo de olhos fechados!" },
            { id: 'rev002', author: "Juliana Braga", authorPhoto: "https://randomuser.me/api/portraits/women/25.jpg", rating: 4, date: "12 de Maio de 2025", comment: "Gostei muito do projeto do quarto do meu filho. Ficou lindo e funcional. Houve um pequeno atraso na entrega do 3D, mas a qualidade final compensou." },
            { id: 'rev003', author: "Fernando Oliveira", authorPhoto: "data:image/jpeg;base64,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", rating: 5, date: "02 de Maio de 2025", comment: "Profissional extremamente competente e criativa. Trouxe soluções que eu nunca imaginaria para otimizar o espaço do meu apartamento. Superou minhas expectativas!" }
        ];
        const mockServices = [
            { id: 'serv001', name: "Consultoria de Design Online", description: "Ideal para quem busca orientações e ideias para um ambiente específico. Inclui call de 1h, moodboard e lista de sugestões.", price: "R$ 450,00", duration: "Entrega em 7 dias úteis" },
            { id: 'serv002', name: "Projeto de Interiores Completo", description: "Desenvolvimento de todas as etapas do projeto, do conceito à planta baixa, 3D e detalhamento de marcenaria e mobiliário.", price: "Sob Consulta", duration: "Varia conforme o projeto" },
            { id: 'serv003', name: "Decoração Express", description: "Foco em renovar o ambiente sem grandes reformas, utilizando pintura, objetos decorativos e mobiliário solto.", price: "A partir de R$ 1.200,00 (por ambiente)", duration: "2-4 semanas" }
        ];
        const mockProvider = {
            id: id || 1, name: "Maria Silva", profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg", coverPhoto: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", bio: "Profissional com mais de 10 anos de experiência. Especializada em design de interiores com foco em sustentabilidade e conforto. Atendimento personalizado para cada cliente.", rating: 4.8, reviewsCount: mockReviews.length, location: "São Paulo, SP", specialties: ["Design de Interiores", "Decoração", "Consultoria"], contact: { email: "maria.silva@exemplo.com", phone: "(11) 98765-4321" }, posts: [{ id: 101, username: "Maria Silva", userPhoto: "https://randomuser.me/api/portraits/women/12.jpg", date: "15 maio 2025", content: "Acabo de finalizar este projeto de sala de estar para um cliente em Moema. Utilizamos materiais sustentáveis e móveis de produtores locais.", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", comments: [ /* ... */ ] }, { id: 102, username: "Maria Silva", userPhoto: "https://randomuser.me/api/portraits/women/12.jpg", date: "10 maio 2025", content: "Compartilhando algumas dicas de como organizar espaços pequenos. A chave é sempre pensar na funcionalidade sem comprometer a estética.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", comments: [ /* ... */ ] }], services: mockServices, reviews: mockReviews 
        };
        setTimeout(() => { setProvider(mockProvider); setLoading(false); }, 800);
    };
    fetchProviderData();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (!provider) {
    return (
      <Container className="text-center my-5">
        <p>Erro ao carregar dados do prestador.</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div
        className="rounded-3 mb-4 position-relative"
        style={{
          height: '200px',
          backgroundImage: `url('${provider.coverPhoto}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <Row>
        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body className="text-center">
              <Image
                src={provider.profilePhoto}
                roundedCircle
                className="mb-3 border border-4 profile-image-border shadow-sm"
                width={120}
                height={120}
                style={{ marginTop: '-60px' }}
              />
              <h2 className="mb-1">{provider.name}</h2>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="me-2 d-flex align-items-center">
                  <BsStarFill className="text-warning" /> <span className="ms-1">{provider.rating}</span>
                </span>
                <span className="text-muted">({provider.reviewsCount} avaliações)</span>
              </div>
              <p className="text-muted mb-3 d-flex justify-content-center align-items-center">
                <BsGeoAltFill className="me-1" />
                {provider.location}
              </p>
              <Card.Text className="mb-4 text-start">
                {provider.bio}
              </Card.Text>
              <div className="mb-4 text-start">
                <h5 className="mb-3">Especialidades</h5>
                <div className="d-flex flex-wrap gap-2">
                  {provider.specialties.map((specialty, index) => (
                    <span key={index} className="badge rounded-pill bg-secondary">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Header className="border-bottom-0 pb-0">
              <Nav variant="tabs" onSelect={(k) => setActiveTab(k)} defaultActiveKey="posts">
                <Nav.Item>
                  <Nav.Link eventKey="posts" href="#">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="services" href="#">Serviços</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews" href="#">
                    Avaliações ({provider.reviewsCount || 0})
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {activeTab === 'posts' && (
                provider.posts?.length > 0 ? (
                  provider.posts.map(post => <Post key={post.id} post={post} />)
                ) : ( <p className="text-muted text-center py-3">Nenhuma postagem ainda.</p> )
              )}

              {activeTab === 'services' && (
                provider.services?.length > 0 ? (
                  <div className="mt-3">
                    {provider.services.map(service => (
                      <Card key={service.id} className="mb-3 shadow-sm">
                        <Card.Body>
                          <Card.Title as="h5">{service.name}</Card.Title>
                          <Card.Text>{service.description}</Card.Text>
                          <Row>
                            {service.price && <Col sm={6} className="mb-2 mb-sm-0"><strong>Preço:</strong> {service.price}</Col>}
                            {service.duration && <Col sm={6}><strong>Duração/Entrega:</strong> {service.duration}</Col>}
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                ) : ( <p className="text-muted text-center py-4">Nenhum serviço cadastrado.</p> )
              )}

              {activeTab === 'reviews' && (
                provider.reviews?.length > 0 ? (
                  <div className="mt-3">
                    {provider.reviews.map(review => (
                      <Card key={review.id} className="mb-3 shadow-sm">
                        <Card.Body>
                          <Row>
                            <Col xs="auto" className="pe-2"> 
                              <Image src={review.authorPhoto || "https://via.placeholder.com/50?text=User"} roundedCircle width={50} height={50} />
                            </Col>
                            <Col>
                              <div className="d-flex justify-content-between align-items-start">
                                <div>
                                  <h6 className="mb-0">{review.author}</h6>
                                  <small className="text-muted">{review.date}</small>
                                </div>
                                <StarRating rating={review.rating} />
                              </div>
                              <p className="mt-2 mb-0">{review.comment}</p>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                ) : ( <p className="text-muted text-center py-4">Ainda não há avaliações.</p> )
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProviderProfile;