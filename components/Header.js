import PropTypes from 'prop-types';
import Button from './Button';

import headerStyles from '../styles/Header.module.css';

import { FaPlus, FaTimes } from 'react-icons/fa';
const Header = ({ title, onAddToggle, showAdd }) => {
  return (
    <div className={headerStyles.header}>
      <h1>{title}</h1>
      <Button
        text={showAdd ? <FaTimes /> : <FaPlus />}
        color={showAdd ? 'steelblue' : 'green'}
        onClick={() => onAddToggle()}
      />
    </div>
  );
};

Header.defaultProps = {
  title: 'My Dream Journal',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
