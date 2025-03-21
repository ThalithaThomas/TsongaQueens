import products from "../productsArr";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCardComponent";
const ShopAllCollection = () => {
  const navigate = useNavigate();
  const handleImgClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <div id="shopAll">
      <h1 className="flex justify-center items-center font-thin font-Merriweather text-l mt-8 mb-4 md:text-2xl  ">
        Shop All
      </h1>
      <div className=" place-items-center grid grid-cols-2  md:grid-cols-3 gap-1  ">
        {products.map((product) => (
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

export default ShopAllCollection;
