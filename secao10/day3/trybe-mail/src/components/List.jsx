import React from 'react';
import PropTypes from 'prop-types';
import emailLido from '../ícones/emailLido.svg';
import emailNãoLido from '../ícones/emailNãoLido.svg';

function List({ messages, setMessageStatus }) {
  return (
    <ul className="messages-list">
      {
        messages.map((message) => {
          const messageClass = message.status === 1
            ? 'message-read' : 'message-unread';
          return (
          <li key={message.id}>
            <p className={ `message-title ${messageClass}`}>
              {message.title}
            </p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={ () => setMessageStatus(message.id, 1)}
              >
                <img src={emailLido} alt="" />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, 0)}
              >
                <img src={emailNãoLido} alt="" />
              </button>
            </div>
          </li>
          )
        })
      }
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
}

export default List;
