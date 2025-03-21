import products from "../productsArr.js";
import ProductCard from "./ProductCardComponent.jsx";

import { useNavigate } from "react-router-dom";
const Shoes = () => {
  const navigate = useNavigate();
  const handleImgClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  const shoeproducts = products.filter(
    (product) => product.category === "shoes"
  );
  return (
    <div>
      <h1 className="flex justify-center text-3xl mb-6">Shoes</h1>
      <div className=" place-items-center grid grid-cols-2  md:grid-cols-4 gap-1   ">
        {shoeproducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleImgClick(product.id)}
          />
        ))}
      </div>
      <a className=" flex justify-center items-center font-Merriweather  mb-16 underline  text-sm sm:text-sm  pt-5">
        VIEW COLLECTION
      </a>
    </div>
  );
};

export default Shoes;
