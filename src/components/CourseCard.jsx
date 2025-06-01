import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ id ,title, description, imageUrl }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {description}
        </Card.Text>
        <Button as={Link} to={`/cursos/${id}`} variant="primary" className="mt-auto">
          Saiba Mais
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;