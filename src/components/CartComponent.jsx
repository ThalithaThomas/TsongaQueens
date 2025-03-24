import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/addToCartSlice";
import { CiShoppingCart } from "react-icons/ci";
const CartComponent = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);
  const items = useSelector((state) => state.cart.items);
  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (itemId, size) => {
    dispatch(cartActions.removeItem({ id: itemId, size }));
  };
  const handleIncrement = (itemId, size, quantity) => {
    dispatch(cartActions.incrementQuantity({ id: itemId, size, quantity }));
  };
  const handleDecrement = (itemId, size, quantity) => {
    dispatch(cartActions.decrementQuantity({ id: itemId, size, quantity }));
  };
  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };
  console.log("items", items);
  return (
    <div className="flex justify-center">
      <div className="py-[2rem] md:px-[12rem] md:w-[90%]   min-h-[400px]  ">
        {totalItems > 1 ? (
          <div className="md:flex justify-between md:ml-4">
            <h2 className="font-semibold text-center md:text-2xl mb-8">
              Shopping Cart
            </h2>{" "}
            <h2 className=" hidden md:block text-xl text-gray-600">
              {totalItems} Items
            </h2>
          </div>
        ) : (
          <div className="flex flex-col  items-center  md:ml-4">
            <h2 className="font-semibold text-xl">Shopping Cart</h2>
          </div>
        )}
        {totalItems === 0 ? (
          <div className="flex flex-col gap-2 mt-12 text-center items-center">
            <CiShoppingCart size={100} />
            <h2 className="text-2xl">your cart is empty</h2>
            <p className="mb-2 text-gray-600">
              Looks like you have not added anything to your cart. go <br />{" "}
              ahead and explore our best sellers
            </p>
            <button className="bg-blue-600 py-1 text-white px-7 rounded-xl">
              <a href="/products">Shop now</a>
            </button>
          </div>
        ) : (
          <div className=" p-4  border-t-[1px]  md:mb-2.5 border-gray-200 ">
            {items.map((item, index) => (
              <div
                className=" md:flex   items-center justify-between border-gray-200 border-b-[1px] "
                key={index}
              >
                <div className="flex md:m-6 ">
                  <img
                    className="w-[100px] mr-3 rounded-md h-[80px]  object-fit sm:w-[80px] sm:h-[80px]"
                    src={item.image.replace("./public", "")}
                    alt={item.name}
                  />
                  <div className=" flex flex-col items-baseline ">
                    <h3 className="text-black  font-semibold">{item.name}</h3>
                    <p className="text-black text-xs">Size {item.size}</p>
                    <p className="text-xs md:mb-2">R {item.price}.00</p>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.size)}
                      className="text-gray-500 text-xs"
                    >
                      remove
                    </button>
                  </div>
                </div>
                <div className="flex mb-2  sm:m-9 ">
                  <button
                    onClick={() => handleDecrement(item.id, item.size, 1)}
                    className=" rounded-s-md border  border-gray-300  px-[6px] md:py-1 md:px-[12px]"
                  >
                    -
                  </button>
                  <button className=" border border-x-0 border-gray-300  px-[6px] md:py-1 md:px-[12px]">
                    {item.quantity}
                  </button>
                  <button
                    onClick={() => handleIncrement(item.id, item.size, 1)}
                    className=" rounded-r-md  border border-gray-300 md:py-1 px-[6px]  md:px-[12px]"
                  >
                    +
                  </button>
                </div>
                <div className=" font-semibold  mb-5 text-xs">
                  <p className="text-nowrap">
                    &nsbp; R {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
            <div className=" ml-6 md:flex justify-between">
              <button
                onClick={handleClearCart}
                className="border-gray-300 border h-[30px] mb-7 md:mt-10 text-xs text-gray-500 px-[10px] max-w-[150px] m:px-[20px]"
              >
                clear cart
              </button>
              <div className="flex-col  max-w-[210px] md:max-w-[150px]">
                <div className="flex justify-between">
                  <span>Subtotal</span>

                  <span className="font-semibold">R {subTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs">
                  Taxes & shipping calculated at checkout
                </p>
                <a href="/checkoutroute">
                  <button className=" px-20 md:px-12 opacity-[2] text-white py-1 text-xs bg-blue-700">
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center w-full">
          <button className="flex flex-row justify-center items-center mb-8 py-1 text-gray-400 text-sm px-7 hover:text-gray-600">
            <a href="/products">/ Continue Shopping</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
