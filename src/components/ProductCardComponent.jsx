import PropTypes from "prop-types";

const ProductCard = ({ product, onClick }) => (
  <div className="mb-5" key={product.id}>
    <img
      onClick={onClick}
      className="w-[150px]   h-[200px]  object-cover sm:w-[280px] sm:h-[350px]"
      src={product.images}
      alt={product.name}
    />
    <div className="flex flex-col justify-center items-center ">
      <p className="font-Merriweather">{product.name}</p>
      <p className="text-sm">R {product.price}</p>
      <p className="text-sm">{product.size}</p>
    </div>
  </div>
);
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
