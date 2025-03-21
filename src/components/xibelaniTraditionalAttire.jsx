import products from "../productsArr.js";
import ProductCard from "./ProductCardComponent.jsx";
import { useNavigate } from "react-router-dom";
const Xibelani = () => {
  const navigate = useNavigate();
  const handleImgClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  const xibelaniProducts = products.filter(
    (product) => product.category === "xibelani"
  );
  return (
    <div className="mb-16">
      <h1 className="flex justify-center items-center font-thin font-roboto  text-l mt-2 mb-7 md:text-xl  ">
        Shop Xibelani Collection
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

export default Xibelani;
