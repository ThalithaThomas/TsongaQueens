import products from "../productsArr.js";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCardComponent.jsx";
const ShopAll = () => {
  const navigate = useNavigate();
  const handleImgClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <div className="mb-16 ">
      <div className=" hidden font-Merriweather h-[150px] w-full mb-14  bg-gray-100 md:flex flex-col justify-center items-center">
        <h1 className="font-thin text-3xl  mb-2">Xitsonga Couture</h1>
        <p>
          Celebrating the modern, confident woman who effortlessly exudes style
          and sophistication.
        </p>
      </div>
      <h1 className="flex justify-center items-center font-thin font-Merriweather text-l mt-8 mb-4 md:text-2xl  ">
        Best Sellers
      </h1>
      <div className=" place-items-center grid grid-cols-2  md:grid-cols-4 gap-1   ">
        {products.slice(0, 8).map((product) => (
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

export default ShopAll;
