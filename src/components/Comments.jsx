import { Container, Card, Image } from 'react-bootstrap'

const Comments = ({ comments }) => {
  return (
    <Container className="mt-3">
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <Card key={index} className="mb-2">
            <Card.Body className="d-flex">
              <Image
                src={comment.userPhoto}
                roundedCircle
                width={40}
                height={40}
                className="me-3"
              />
              <div>
                <strong>{comment.author}</strong>
                <p className="mb-1">{comment.text}</p>
                <small className="text-muted">{comment.date}</small>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-muted">Nenhum comentário ainda.</p>
      )}
    </Container>
  )
}

export default Comments

