
import PropTypes from 'prop-types';
import {Btn} from './Button.styled'
 
const Button = ({onClick}) => {
  return (
  <Btn type="button"  onClick={onClick}>
      Go back
    </Btn>
  );
};

export default Button 
Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
