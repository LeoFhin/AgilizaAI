import React from 'react';
import { Card } from 'react-bootstrap';

const MessageBubble = ({ message, isMe }) => {

  const bubbleClasses = [
    'message-bubble',
    isMe ? 'is-me' : 'is-other'
  ].join(' ');

  const alignClass = isMe ? 'justify-content-end' : 'justify-content-start';

  return (
    <div className={`d-flex mb-2 ${alignClass}`}>
      <Card
        className={bubbleClasses}
        style={{ maxWidth: '75%', borderRadius: '15px' }}
      >
        <Card.Body className="p-2 px-3">
          <p className="mb-1" style={{fontSize: '0.9rem'}}>{message.text}</p>
          <small className="timestamp text-muted" style={{fontSize: '0.7rem', display: 'block'}}>
            {message.timestamp}
          </small>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MessageBubble;