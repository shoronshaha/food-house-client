import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <p className="text-yellow-500 my-2">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4 text-white">
        {heading}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.node,
  subHeading: PropTypes.node,
};

export default SectionTitle;
