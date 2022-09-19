import PropTypes from 'prop-types';
import emailLido from '../ícones/emailLido.svg';
import emailNãoLido from '../ícones/emailNãoLido.svg';

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <img src={emailLido} alt="" />
        Marcar Todas Como Lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src={emailNãoLido} alt="" />
        Marcar Todas Como Não Lida
      </button>
    </div>
  )
}

Controls.propTypes = {
  markAllAsRead: PropTypes.func.isRequired,
  markAllAsUnread: PropTypes.func.isRequired,
}

export default Controls;
