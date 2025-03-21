import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/Products";
import About from "./pages/about-us";
import Contact from "./pages/contact-us.jsx";
import Nopage from "./pages/not-found";
import SingleProduct from "./pages/Single-product";
import SetPage from "./pages/sets-route.jsx";
import Xib from "./pages/xibelani-route";
import ShoePage from "./pages/shoes-route.jsx";
import AccessoryPage from "./pages/accessories";
import Return from "./pages/return-policy";
import CartRoute from "./pages/cart-route.jsx";
import CheckoutRoute from "./pages/checkout-route.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkoutroute" element={<CheckoutRoute />} />
          <Route path="/xib" element={<Xib />} />
          <Route path="/shoePage" element={<ShoePage />} />
          <Route path="/accessoryPage" element={<AccessoryPage />} />
          <Route path="/setPage" element={<SetPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/return" element={<Return />} />
          <Route path="/cartroute" element={<CartRoute />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
