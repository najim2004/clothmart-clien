import PropTypes from "prop-types";

const Section = ({ children, className }) => {
  return (
    <section className={`${className} max-w-[1120px] mx-auto`}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
