import heroImg from "../assets/sss.png";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center flex-col md:flex-row   "
      id="hero"
    >
      <div className="md:mr-[8rem] ">
        <img src={heroImg} alt="Traditional xitsonga clothing" />
      </div>
      <div className="text-center">
        <h1 className=" pb-1  hidden md:block md:font-thin md:text-3xl ">
          Embracing Heritage
          <br /> Celebrating Identity!
        </h1>
        <h1 className="font-Playfair mt-4 font-thin text-4xl md:hidden">
          Xitsonga Couture
        </h1>
        <p className="hidden md:block">
          Make a statement with Tsonga traditional <br />
          wear attire! choose one of our elegant <br />
          pieces to elevate your wardrobe today.
        </p>
        <a
          href="/products"
          className="underline font-bold text-xs sm:text-sm font-roboto pt-5"
        >
          SHOP THE COLLECTION
        </a>
      </div>
    </section>
  );
};

export default Hero;
