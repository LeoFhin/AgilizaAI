import { Card, Button, Image } from 'react-bootstrap'
import Comments from './Comments'

const Post = ({ post }) => {
  return (
    <Card className="mb-4">
      <Card.Body>

        {/* Cabeçalho: Foto, Nome e Data */}
        <div className="d-flex align-items-center mb-3">
          <Image
            src={post.userPhoto}
            roundedCircle
            width={50}
            height={50}
            className="me-3"
          />
          <div>
            <h5 className="mb-0">{post.username}</h5>
            <small className="text-muted">{post.date}</small>
          </div>
        </div>

        {/* Conteúdo do post */}
        <p>{post.content}</p>
        {post.image && (
          <Image src={post.image} fluid className="my-3 rounded" />
        )}

        {/* Botões de interação */}
        <div className="d-flex justify-content-start gap-2 mb-3">
          <Button variant="outline-primary" size="sm">Curtir</Button>
          <Button variant="outline-secondary" size="sm">Comentar</Button>
        </div>

        {/* Comentários */}
        <Comments comments={post.comments} />

      </Card.Body>
    </Card>
  )
}

export default Post

