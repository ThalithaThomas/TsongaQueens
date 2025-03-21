import Footer from "../components/SiteFooter";
import Header from "../components/SiteHeader";
import Hero from "../components/heroBanner";

import ShopAll from "../components/ShopAllProducts";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ShopAll />

      <Footer />
    </div>
  );
};
export default Home;
