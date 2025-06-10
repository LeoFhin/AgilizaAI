import React from 'react';
import { Card } from 'react-bootstrap';

const MessageBubble = ({ message, isMe }) => {
  const alignClass = isMe ? 'ms-auto' : 'me-auto'; 
  const bgBubble = isMe ? 'primary' : 'light';
  const textBubble = isMe ? 'white' : 'dark';
  const textAlign = isMe ? 'end' : 'start';

  return (
    <div className={`d-flex mb-2 ${isMe ? 'justify-content-end' : 'justify-content-start'}`}>
      <Card
        bg={bgBubble}
        text={textBubble}
        style={{ maxWidth: '75%', borderRadius: '15px' }}
        className={`shadow-sm ${alignClass}`}
      >
        <Card.Body className="p-2 px-3">
          <p className="mb-1" style={{fontSize: '0.9rem'}}>{message.text}</p>
          <small className={`text-muted ${isMe ? 'text-light opacity-75' : 'text-black-50'}`} style={{fontSize: '0.7rem', textAlign: textAlign, display: 'block'}}>
            {message.timestamp}
          </small>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MessageBubble;