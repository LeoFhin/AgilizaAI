import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData'; 

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <Container className="text-center py-5">
        <h2>Curso não encontrado!</h2>
        <p>O curso que você está procurando não existe ou foi movido.</p>
        <Button as={Link} to="/cursos" variant="primary">Voltar para Cursos</Button>
      </Container>
    );
  }

  const {
    title,
    longDescription,
    imageUrl, 
    instructor,
    duration,
    modules = [], 
    whatYouWillLearn = [], 
    price
  } = course;

  return (
    <Container className="py-5 course-detail-page"> 
      <Row className="mb-3">
        <Col>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>
            &larr; Voltar
          </Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <Image
            src={imageUrl || 'https://via.placeholder.com/1200x400?text=Imagem+do+Curso'}
            alt={title}
            fluid 
            className="course-detail-image-top" 
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
          />
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <h1 className="mb-3">{title}</h1>
          <p className="text-muted">
            <strong>Instrutor(a):</strong> {instructor || 'A definir'} | <strong>Duração:</strong> {duration || 'A definir'}
          </p>
          <hr />
          
          <h4>Sobre o Curso</h4>
          <p style={{ whiteSpace: 'pre-line' }}>{longDescription || 'Descrição detalhada não disponível.'}</p>

          {whatYouWillLearn.length > 0 && (
            <>
              <h5 className="mt-4">O que você vai aprender:</h5>
              <ul>
                {whatYouWillLearn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {modules.length > 0 && (
            <>
              <h5 className="mt-4">Módulos do Curso:</h5>
              <ul>
                {modules.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
            </>
          )}
        </Col>

        <Col md={4}> 
          <div className="sticky-top" style={{ top: '20px' }}> 
            <div className="card p-3 shadow-sm">
              <h4 className="text-center">Invista em Você!</h4>
              {price && <h3 className="text-center my-3">{price}</h3>}
              <Button variant="success" size="lg" className="w-100 mt-2">
                Inscreva-se Agora!
              </Button>
              <Button variant="outline-primary" size="sm" className="w-100 mt-3">
                Adicionar aos Favoritos
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetailPage;