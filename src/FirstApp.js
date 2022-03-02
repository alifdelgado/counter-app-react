import PropTypes from "prop-types";

const FirstApp = ({ saludo, subtitle }) => (
  <>
    <h1>{saludo}</h1>
    <p>{subtitle}</p>
  </>
);

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "this is a subtitle",
};

export default FirstApp;
