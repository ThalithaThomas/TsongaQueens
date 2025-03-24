import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-gray-100 w-full px-4 py-6 mt-10 md:mt-28 md:flex md:justify-between md:px-6 lg:px-12">
      <div className="mb-6 md:mb-0">
        <h1 className="text-md font-sans font-medium mb-3">INFO</h1>
        <ul className="font-sans space-y-2">
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/return">Return Policy</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="mt-6 md:hidden">
        <h1 className="text-md font-sans font-medium mb-3">SUBSCRIBE</h1>
        <p className="text-sm mb-3 font-sans">Sign up to our mailing list</p>
        <div className="flex">
          <input
            type="email"
            className="bg-white mr-2 p-2 border border-gray-300 focus:outline-none flex-grow"
            placeholder="Your Email"
          />
          <button className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
            OK
          </button>
        </div>
      </div>
      <div className="pt-10  hidden md:block ">
        <h1>SUBSCRIBE</h1>
        <p className="text-md mb-1 font-sans">Sign up to our mailing list</p>
        <div>
          <input
            type="email"
            className="bg-white  mr-2 p-1"
            placeholder="Your Email"
          />
          <button className="bg-black pointer  text-xs text-white p-2">
            OK
          </button>
        </div>
      </div>
      <div className="pt-8 md:pt-10">
        <h4 className=" text-xs hidden md:block md:text-md">TSONGA QUEENS</h4>
        <p className=" text-xs md:text-md">Copyright © 2025 TSONGA QUEENS</p>
        <ul className="flex md:mt-1  ">
          <li>
            <a href="https://www.instagram.com/tsonga_queenss?igsh=ZGZsYmkyenoxcXQ2&utm_source=qr">
              <FaSquareInstagram
                size={20}
                style={{ color: "black" }}
                className=""
              />
            </a>
          </li>
          <li className="ml-2">
            <a href="https://wa.me/27720191566">
              <FaWhatsapp size={20} style={{ color: "black" }} />
            </a>
          </li>
          <li className="ml-2">
            <a href="https://github.com/ThalithaThomas">
              <MdOutlineMail size={20} style={{ color: "black" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
