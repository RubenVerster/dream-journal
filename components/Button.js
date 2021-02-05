import PropTypes from 'prop-types';

import buttonStyles from '../styles/Button.module.css';

const Button = ({ text, color, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className={buttonStyles.btn}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: 'steelblue',
  text: 'Add',
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
