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
    <div className="flex flex-col justify-center sm:flex-row mt-[3rem]  w-full">
      <div className="mr-8">
        <img
          className="w-[150px]   h-[200px]  object-cover sm:w-[400px] sm:h-[410px]"
          src={product.images.replace("./public", "")}
          alt=""
        />
      </div>
      <div className="  w-[300px] ">
        <div className="mb-[3rem] text-xs">
          <a href="/home">Home /</a>
          <a href="/products">Shop All</a>
        </div>
        <h1 className="font-Merriweather text-2xl">{product.name}</h1>
        <h1>Size</h1>
        <div className="flex cursor-pointer">
          {Sizes.map((size) => (
            <div className="flex cursor-pointer" key={size}>
              <button
                className="mr-3 border px-3.5 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer"
                value="sizeS"
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            </div>
          ))}
        </div>
        <p className="text-sm">R {product.price}</p>

        <button
          onClick={() => {
            AddItemClick();
          }}
          className="border  px-[29px] py-1 mb-3  hover:bg-gray-100 cursor-pointer "
        >
          ADD TO CART
        </button>
        <a href="/cartroute"><button  onClick={() => {
            AddItemClick();
          }} className="bg-black  text-white cursor-pointer  px-[29px] py-1">
          BUY IT NOW
        </button></a>
      </div>
    </div>
  );
};

export default ProductDetails;
