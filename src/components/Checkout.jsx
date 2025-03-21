import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/addToCartSlice";
import CustomerDetails from "./CustomerDetailsComponent";
const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const subTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(subTotal);
  const handleCheckout = (event) => {
    event.preventDefault();
    // Simulate checkout logic
    console.log("Checking out:", items);
    // Clear the cart after checkout
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="md:mt-5">
      <div className=" md:flex justify-center p-6">
        <div className="sm:mr-7 sm:shadow-lg sm:px-16 sm:rounded-lg  ">
          <form onSubmit={handleCheckout} className=" sm:px-10 py-3 ">
            <h3 className="font-semibold md:text-lg my-3">
              Contact information{" "}
            </h3>
            <CustomerDetails label="Email" id="name" type="email" />
            <input
              type="checkbox"
              className="hidden mt-1 sm:block"
              id="subscribe"
            />
            <label
              htmlFor="subscribe"
              className=" hidden sm:block text-xs ml-1 "
            >
              Email me with news and others
            </label>
            <h3 className="md:text-lg font-semibold my-4">Delivery address</h3>
            <CustomerDetails label="Name" id="name" type="text" />
            <CustomerDetails label="Address" id="name" type="text" />
            <CustomerDetails label="City" id="name" type="text" />
            <CustomerDetails label="Zip Code" id="name" type="text" />
            <div className="mb-4  "></div>
          </form>
        </div>
        <div className="ml-2 mt-4   ">
          <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
          {items.length === 0 ? (
            <p className="text-gray-700">Your cart is empty.</p>
          ) : (
            <div>
              <ul className="mb-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between py-2 border-b"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>R {(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold">Total: R{subTotal}</h3>
            </div>
          )}

          <button
            type="submit"
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
