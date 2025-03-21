const ContactuS = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" h-[400px] w-[280px] md:w-[500px] p-9 my-10">
        <h1 className="font-semibold mb-10 text-xl text-center  ">
          Contact Us
        </h1>
        <p className="text-center">
          For all inquiries please contact us below,
          <br />
          We will be in contact you within 24 hours.
        </p>
        <form action="">
          <div className="md:flex my-3 ">
            <input
              className="border-1 border-gray-300  mb-2 md:mr-4 p-1"
              type="text"
              required
              name="name"
              placeholder="  Name"
            />
            <input
              type="text"
              className="border-1 border-gray-300 p-1"
              name="email"
              required
              placeholder=" Email"
            />
          </div>
          <input
            className="border-1 h-[100px] w-[200px]  md:w-[400px] border-gray-300 p-1"
            type="text"
            required
            name="message"
            placeholder=" Message"
          />
        </form>
        <div className=" flex justify-center">
          <button className="bg-black rounded-2xl text-white w-[100px] p-1 my-4">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactuS;
