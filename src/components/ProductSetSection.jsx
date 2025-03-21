import products from "../productsArr.js";
import ProductCard from "./ProductCardComponent.jsx";
import { useNavigate } from "react-router-dom";
const Set = () => {
  const navigate = useNavigate();
  const handleImgClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  const xibelaniProducts = products.filter(
    (product) => product.category === "Set"
  );
  return (
    <div>
      <h1 className="flex justify-center items-center font-thin font-Merriweather text-l mt-3 mb-9 md:text-2xl  ">
        SETS
      </h1>
      <div className=" place-items-center grid grid-cols-2  md:grid-cols-4 gap-1  ">
        {xibelaniProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleImgClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Set;
