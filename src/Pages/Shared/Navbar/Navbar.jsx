import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
       alert("Logged out successfully.");
        
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };

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
      {user ? <>
        <button
          onClick={handleLogOut}
          className="flex items-start pl-3 lg:items-center"
        >
          Log Out
        </button></>
      : <>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </>}
    </>
  );
  return (
    <div className="navbar font-inter fixed border rounded shadow-xl z-10 bg-base-100 bg-opacity-30 max-w-7xl mx-auto text-gray-800 p-2">
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
        <a className="font-cinzel py-1 px-2 border rounded shadow ml-2 text-[10px] lg:text-xl font-bold">
          <span className="text-blue-800">Fairy</span>{" "}
          <span className="text-yellow-400">Resturant</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="px-2 py-1 bg-gray-600 border rounded shadow-xl text-[10px] lg:text-xl mr-2 font-cinzel text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
