import PropTypes from "prop-types";
const CustomerDetails = ({ label, id, type }) => {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-semibold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="shadow box-border appearance-none border rounded w-full py-1 sm:py-2  px-16 md:px-10 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
  );
};
CustomerDetails.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default CustomerDetails;
