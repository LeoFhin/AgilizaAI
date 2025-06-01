// ProviderProfile.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Nav } from 'react-bootstrap';
import Post from '../components/Post'; // Certifique-se que o caminho para Post está correto
import { useParams } from 'react-router-dom'; // Adicionado para consistência, embora o mock atual não use o 'id' para diferenciar muito

// Componente/Função para renderizar estrelas de avaliação
const StarRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning me-1"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star text-warning me-1"></i>); // Estrela vazia
    }
  }
  return <>{stars}</>;
};

const ProviderProfile = () => {
  const { id } = useParams(); // Pega o ID da URL, se existir
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    const fetchProviderData = () => {
      const mockReviews = [
        {
          id: 'rev001',
          author: "Carlos Almeida",
          authorPhoto: "https://randomuser.me/api/portraits/men/35.jpg",
          rating: 5,
          date: "20 de Maio de 2025",
          comment: "A Maria foi sensacional! Transformou minha sala de estar num ambiente super aconchegante e moderno. Entendeu perfeitamente o que eu queria. Recomendo de olhos fechados!"
        },
        {
          id: 'rev002',
          author: "Juliana Braga",
          authorPhoto: "https://randomuser.me/api/portraits/women/25.jpg",
          rating: 4,
          date: "12 de Maio de 2025",
          comment: "Gostei muito do projeto do quarto do meu filho. Ficou lindo e funcional. Houve um pequeno atraso na entrega do 3D, mas a qualidade final compensou."
        },
        {
          id: 'rev003',
          author: "Fernando Oliveira",
          authorPhoto: null, 
          rating: 5,
          date: "02 de Maio de 2025",
          comment: "Profissional extremamente competente e criativa. Trouxe soluções que eu nunca imaginaria para otimizar o espaço do meu apartamento. Superou minhas expectativas!"
        }
      ];

      const mockServices = [
        {
          id: 'serv001',
          name: "Consultoria de Design Online",
          description: "Ideal para quem busca orientações e ideias para um ambiente específico. Inclui call de 1h, moodboard e lista de sugestões.",
          price: "R$ 450,00",
          duration: "Entrega em 7 dias úteis"
        },
        {
          id: 'serv002',
          name: "Projeto de Interiores Completo",
          description: "Desenvolvimento de todas as etapas do projeto, do conceito à planta baixa, 3D e detalhamento de marcenaria e mobiliário.",
          price: "Sob Consulta",
          duration: "Varia conforme o projeto"
        },
        {
          id: 'serv003',
          name: "Decoração Express",
          description: "Foco em renovar o ambiente sem grandes reformas, utilizando pintura, objetos decorativos e mobiliário solto.",
          price: "A partir de R$ 1.200,00 (por ambiente)",
          duration: "2-4 semanas"
        }
      ];

      const mockProvider = {
        id: id || 1, // Usa o ID da URL se existir, senão um ID padrão
        name: "Maria Silva", // Mantendo estático por enquanto para "Meu Perfil"
        profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
        coverPhoto: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        bio: "Profissional com mais de 10 anos de experiência. Especializada em design de interiores com foco em sustentabilidade e conforto. Atendimento personalizado para cada cliente.",
        rating: 4.8, // Pode ser calculado dinamicamente a partir das avaliações no futuro
        reviewsCount: mockReviews.length, // Atualizado dinamicamente
        location: "São Paulo, SP",
        specialties: ["Design de Interiores", "Decoração", "Consultoria"],
        contact: {
          email: "maria.silva@exemplo.com",
          phone: "(11) 98765-4321"
        },
        posts: [
          {
            id: 101,
            username: "Maria Silva",
            userPhoto: "https://randomuser.me/api/portraits/women/12.jpg",
            date: "15 maio 2025",
            content: "Acabo de finalizar este projeto de sala de estar para um cliente em Moema. Utilizamos materiais sustentáveis e móveis de produtores locais.",
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            comments: [ /* ... */ ]
          },
          {
            id: 102,
            username: "Maria Silva",
            userPhoto: "https://randomuser.me/api/portraits/women/12.jpg",
            date: "10 maio 2025",
            content: "Compartilhando algumas dicas de como organizar espaços pequenos. A chave é sempre pensar na funcionalidade sem comprometer a estética.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            comments: [ /* ... */ ]
          }
        ],
        services: mockServices, // Adicionado
        reviews: mockReviews    // Adicionado
      };

      setTimeout(() => {
        setProvider(mockProvider);
        setLoading(false);
      }, 800);
    };

    fetchProviderData();
  }, [id]); // Adicionado 'id' como dependência

  if (loading) {
    return (
      <Container className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-3">Carregando perfil do prestador...</p>
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
      {/* Foto de capa */}
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
        {/* Coluna de informações do perfil */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="text-center">
              <Image
                src={provider.profilePhoto}
                roundedCircle
                className="mb-3 border border-4 border-white shadow-sm"
                width={120}
                height={120}
                style={{ marginTop: '-60px' }}
              />
              <h2 className="mb-1">{provider.name}</h2>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <span className="me-2">
                  <i className="bi bi-star-fill text-warning"></i> {provider.rating}
                </span>
                <span className="text-muted">({provider.reviewsCount} avaliações)</span>
              </div>
              <p className="text-muted mb-3">
                <i className="bi bi-geo-alt-fill me-1"></i>
                {provider.location}
              </p>
              <Card.Text className="mb-4 text-start">
                {provider.bio}
              </Card.Text>
              <div className="mb-4 text-start">
                <h5 className="mb-3">Especialidades</h5>
                <div className="d-flex flex-wrap gap-2">
                  {provider.specialties.map((specialty, index) => (
                    <span key={index} className="badge bg-light text-dark border">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-3 text-start">
                <h5 className="mb-3">Contato</h5>
                <p className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  {provider.contact.email}
                </p>
                <p className="mb-0">
                  <i className="bi bi-telephone me-2"></i>
                  {provider.contact.phone}
                </p>
              </div>
              <Button variant="primary" size="lg" className="w-100 mt-3">
                Entrar em contato
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Coluna de conteúdo (posts, serviços, avaliações) */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Header className="bg-white border-bottom-0 pb-0">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === 'posts'}
                    onClick={() => setActiveTab('posts')}
                    href="#" style={{cursor: 'pointer'}}
                  >
                    Posts
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === 'services'}
                    onClick={() => setActiveTab('services')}
                    href="#" style={{cursor: 'pointer'}}
                  >
                    Serviços
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    active={activeTab === 'reviews'}
                    onClick={() => setActiveTab('reviews')}
                    href="#" style={{cursor: 'pointer'}}
                  >
                    Avaliações ({provider.reviewsCount || 0})
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              {activeTab === 'posts' && (
                provider.posts && provider.posts.length > 0 ? (
                  provider.posts.map(post => (
                    <Post key={post.id} post={post} />
                  ))
                ) : (
                  <p className="text-muted text-center py-3">Nenhuma postagem ainda.</p>
                )
              )}

              {activeTab === 'services' && (
                provider.services && provider.services.length > 0 ? (
                  <div className="mt-3">
                    {provider.services.map(service => (
                      <Card key={service.id} className="mb-3 shadow-sm">
                        <Card.Body>
                          <Card.Title as="h5">{service.name}</Card.Title>
                          <Card.Text>{service.description}</Card.Text>
                          <Row>
                            {service.price && (
                              <Col sm={6} className="mb-2 mb-sm-0">
                                <strong>Preço:</strong> {service.price}
                              </Col>
                            )}
                            {service.duration && (
                              <Col sm={6}>
                                <strong>Duração/Entrega:</strong> {service.duration}
                              </Col>
                            )}
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted">Nenhum serviço cadastrado no momento.</p>
                  </div>
                )
              )}

              {activeTab === 'reviews' && (
                provider.reviews && provider.reviews.length > 0 ? (
                  <div className="mt-3">
                    {provider.reviews.map(review => (
                      <Card key={review.id} className="mb-3 shadow-sm">
                        <Card.Body>
                          <Row>
                            <Col xs="auto" className="pe-0"> {/* pe-0 para reduzir espaço se a foto for pequena */}
                              <Image
                                src={review.authorPhoto || "https://via.placeholder.com/50?text=User"}
                                roundedCircle
                                width={50}
                                height={50}
                                className="me-2" // Mantém uma pequena margem à direita
                              />
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
                ) : (
                  <div className="text-center py-4">
                    <p className="text-muted">Ainda não há avaliações para este prestador.</p>
                  </div>
                )
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProviderProfile;