import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    const navlinks = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/order"}>Our shop</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={'/deshboard'}>Deshboard</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar font-inter fixed z-10 bg-base-100 bg-opacity-30 max-w-7xl mx-auto text-gray-800 p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="font-cinzel btn btn-ghost text[10px] lg:text-2xl font-extrabold ">
            <span className="text-blue-800">Fairy</span> <span className="text-yellow-400">Resturant</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline border-1 border-b-4 border-b-blue-600 bg-gray-600 text-white mt-2 mr-2 text-[13px] hover:border-b-yellow-200 ">
            Get Started
          </button>
        </div>
      </div>
    );
};

export default Navbar;