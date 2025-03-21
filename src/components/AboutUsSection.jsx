const AboutUs = () => {
  return (
    <div className="md:flex justify-center  my-10">
      <img
        className="  hidden w-[400px]  md:block h-[400px]"
       
        src="miss.png"
        alt="Traditional xitsonga clothing "
      />
      <div className=" ml-5 md:ml-20 font-serif  ">
        <h1 className="font-semibold md:text-center my-6">About Us</h1>
        <p className=" w-[270px]  md:text-md md:w-[400px] ">
          Welcome to Tsonga Queens! At Tsonga Queens, we honor the vibrant
          heritage of the Xitsonga people by offering beautifully crafted
          traditional wear. our mission is to empower individuals through
          authentic, high-quality garments that celebrate our culture. Each
          piece is handmade by skilled artisans, combining traditional designs
          with modern flair.
        </p>
        <p className=" w-[280px] text-md md:text-md md:w-[400px] my-5">
          When you wear our clothing, you embrace a rich story of heritage and
          craftsmanship. By choosing Tsonga Queens, you support local artisans
          and sustainable practices, helping preserve our culture for future
          generations. Explore our collection and wear the beauty of Xitsonga
          tradition with pride! Thank you for joining us on this journe
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
