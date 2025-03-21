const Culture = () => {
  return (
    <div className="mb-16">
      <div className="bg-pink-200 w-full h-[250px] flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">GET ON THE LIST</h1>
        <p>
          Join our mailing list to receive updates on our new <br />
          arrivals, subscriber only flash sales and more!
        </p>
        <div>
          <input
            type="text"
            className="bg-white  mr-2 mt-1 p-1"
            placeholder="Your Email"
          />
          <button className="bg-black pointer  text-white p-1">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Culture;
