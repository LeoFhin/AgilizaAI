// src/pages/CourseDetailPage.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData'; // Certifique-se que o caminho está correto

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

  // Usando os campos do seu coursesData.js
  const {
    title,
    longDescription,
    imageUrl, // Usaremos esta como a imagem principal do topo
    instructor,
    duration,
    modules = [], // Default para array vazio se não existir
    whatYouWillLearn = [], // Default para array vazio
    price
  } = course;

  return (
    <Container className="py-5 course-detail-page"> {/* Adicionada classe para estilização opcional */}
      <Row className="mb-3">
        <Col>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>
            &larr; Voltar
          </Button>
        </Col>
      </Row>

      {/* Seção da Imagem no Topo */}
      <Row className="mb-4">
        <Col xs={12}>
          <Image
            src={imageUrl || 'https://via.placeholder.com/1200x400?text=Imagem+do+Curso'}
            alt={title}
            fluid // Para ser responsiva e ocupar a largura da coluna
            className="course-detail-image-top" // Classe para estilização opcional
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} // Estilo inline para exemplo
          />
        </Col>
      </Row>

      {/* Seção de Conteúdo Abaixo da Imagem */}
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

        <Col md={4}> {/* Coluna lateral para CTA (Call to Action) / Preço */}
          <div className="sticky-top" style={{ top: '20px' }}> {/* Para o card lateral "flutuar" ao rolar */}
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