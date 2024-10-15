import { FaBars, FaCalendarAlt, FaCalendarCheck, FaHome, FaShoppingCart, FaStar, FaStore } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="flex font-cinzel">
      {/* dashboard sidebar */}
      <div className="w-1/4 min-h-screen bg-orange-400 text-gray-800">
        <ul className="space-y-2 px-2">
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/dashboard/reservatioin"}
              className="flex items-center gap-1 text-[8px] lg:text-xl"
            >
              <span>
                <FaCalendarAlt></FaCalendarAlt>{" "}
              </span>{" "}
              Reservation
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink to={"/dashboard/cart"} className="flex items-center gap-1">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/dashboard/review"}
              className="flex items-center gap-1"
            >
              <FaStar></FaStar> Add a Review
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/dashboard/review"}
              className="flex items-center gap-1"
            >
              <span>
                <FaCalendarCheck></FaCalendarCheck>
              </span>
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/"}
              className="flex items-center gap-1"
            >
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/menu"}
              className="flex items-center gap-1"
            >
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/order"}
              className="flex items-center gap-1"
            >
              <FaStore></FaStore> Our Shop
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard contents */}
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;