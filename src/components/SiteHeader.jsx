import NavLink from "./NavLinkComponent";
import { IoIosMenu } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { LiaTimesCircle } from "react-icons/lia";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <div className="cursor">
      <div
        className="h-10 w-full flex items-center text-white bg-pink-300   justify-center"
        id="header"
      >
        <p className="text-xs font-playfair p-4 text-center text- md:text-sm">
          TAG US ON IG TO BE FEAUTURED: @TSONGA_QUEENSS
        </p>
      </div>
      <ul className="h-[4rem] bg-white flex justify-between pt-[3rem] pb-[4rem] pl-3 pr-3 ">
        <li>
          <IoIosMenu
            onClick={handleNav}
            className="text-2xl md:3xl lg:text-4xl "
          />
        </li>
        <li>
          <h1 className="text-sm md:text-2xl  lg:3xl ">Tsonga Queens</h1>
        </li>
        <li className="flex flex-row gap-3">
          <a href="/cartroute">
            <FiShoppingCart className="text-2xl md:text3xl lg:text-2xl " />
          </a>
          <span>{totalItems}</span>
        </li>
      </ul>
      <div
        className={
          nav
            ? "fixed top-0  text-sm left-0 h-[100vh]  w-[17rem] sm:w-[24rem] bp-[2rem]  bg-white"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="border-b-[1px] border-gray-50  w-[17rem sm:w-[23rem] py-8 pl-4 flex flex-row justify-between list-none">
          <li>
            <Link>SEARCH</Link>
          </li>
          <li className="flex justify-between">
            <Link>
              <LiaTimesCircle
                onClick={handleNav}
                className=" text-xl sm:text-2xl "
              />
            </Link>
          </li>
        </div>
        <ul className="text-sm">
          <NavLink href="/home">HOME</NavLink>
          <NavLink href="/products">SHOP ALL</NavLink>
          <NavLink href="/xib">XIBELANI</NavLink>
          <NavLink href="/setPage">SET</NavLink>
          <NavLink href="/shoePage">SHOES</NavLink>
          <NavLink href="/accessorypage">ACCESSORIES</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
