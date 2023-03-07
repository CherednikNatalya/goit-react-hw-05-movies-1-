import css from './Section.module.css';
import PropTypes from 'prop-types';

 const Section = ({ title, children }) => (
  <section>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);


export default Section 

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};