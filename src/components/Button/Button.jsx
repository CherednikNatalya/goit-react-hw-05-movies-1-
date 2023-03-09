import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

 const Button = ({onClick}) => {
  return (
  <div className={css.but}>
    <button type="button" className={css.button} onClick={onClick}>
      Go back
    </button>
    </div>
  );
};

export default Button 
Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
