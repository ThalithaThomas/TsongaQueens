import products from "../productsArr.js";
import ProductCard from "./ProductCardComponent.jsx";
import { useNavigate } from "react-router-dom";

const Accessory = () => {
  const navigate = useNavigate();

  const handleImgClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  const accessoryProducts = products.filter(
    (product) => product.category === "accessory"
  );
  return (
    <div>
      <h1 className="flex justify-center items-center font-thin font-Merriweather text-l  md:text-2xl  ">
        Accessory
      </h1>
      <div className=" place-items-center grid grid-cols-2  md:grid-cols-4 gap-1  mt-14  ">
        {accessoryProducts.map((product) => (
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

export default Accessory;
