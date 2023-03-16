
import PropTypes from 'prop-types';
import {Title, Sections} from './Section.styled'


const Section = ({ title, children }) => (
  <Sections>
    <Title>{title}</Title>
    {children}
  </Sections>
);


export default Section 

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};