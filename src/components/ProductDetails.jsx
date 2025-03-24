import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/addToCartSlice";
import products from "../productsArr";
import { useState } from "react";

const ProductDetails = () => {
  const Sizes = ["S", "M", "L"];
  const [selectedChange, setSelectedChange] = useState("S");
  const handleSizeChange = (size) => {
    setSelectedChange(size);
  };
  const { id } = useParams();

  const productId = Number(id);

  const product = products.find((product) => product.id === productId);

  const dispatch = useDispatch();

  const AddItemClick = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      image: product.images,
      price: product.price,
      quantity: 1,
      size: selectedChange,
    };

    dispatch(cartActions.addToCart(newItem));
  };

  return (
    <div className="flex flex-col items-center justify-center sm:flex-row mt-[3rem] w-full px-4">
      {/* Image container - centered on small screens */}
      <div className="mb-6 sm:mb-0 sm:mr-8 flex justify-center">
        <img
          className="w-[220px] h-[300px] object-cover sm:w-[400px] sm:h-[410px]"
          src={product.images.replace("./public", "")}
          alt=""
        />
      </div>

      {/* Product details - centered on small screens */}
      <div className="text-center w-full max-w-[300px]">
        <div className="mb-[3rem] text-xs flex justify-center">
          <a href="/home">Home /</a>
          <a href="/products">Shop All</a>
        </div>

        <h1 className="font-Merriweather text-center text-2xl mb-4">
          {product.name}
        </h1>

        <h1 className="text-center mb-2">Size</h1>
        <div className="flex items-center justify-center mb-4">
          {Sizes.map((size) => (
            <div className="flex text-center cursor-pointer" key={size}>
              <button
                className={`mr-3 border px-3.5 py-1 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer text-center ${
                  selectedChange === size ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            </div>
          ))}
        </div>

        <p className="text-sm mb-4">R {product.price}</p>

        <div className="flex flex-col items-center">
          <a href="/cartroute" className="w-full flex justify-center">
            <button
              onClick={() => {
                AddItemClick();
              }}
              className="border px-[29px] py-1 mb-3 w-full max-w-[200px] hover:bg-gray-100 cursor-pointer"
            >
              ADD TO CART
            </button>
          </a>
          <a href="/cartroute" className="w-full flex justify-center">
            <button
              onClick={() => {
                AddItemClick();
              }}
              className="bg-black text-white cursor-pointer px-[29px] py-1 w-full max-w-[200px]"
            >
              BUY IT NOW
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
