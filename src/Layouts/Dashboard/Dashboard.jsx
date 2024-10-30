import { FaBars, FaBook, FaCalendarAlt, FaCalendarCheck, FaEnvelope, FaHome, FaShoppingCart, FaStar, FaStore, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosList } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
  const [isAdmin]=useAdmin();
  return (
    <div className="flex font-cinzel">
      {/* dashboard sidebar */}
      <div className="w-1/4 min-h-screen bg-orange-400 text-gray-800">
        <ul className="space-y-2 px-2">
          {isAdmin ? (
            <>
              <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
                <NavLink
                  to={"/dashboard/adminHome"}
                  className="flex items-center gap-1 text-[8px] lg:text-xl"
                >
                  <span>
                    <FaHome></FaHome>{" "}
                  </span>{" "}
                  Admin Home
                </NavLink>
              </li>
              <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
                <NavLink
                  to={"/dashboard/addItems"}
                  className="flex items-center gap-1"
                >
                  <ImSpoonKnife /> Add Items
                </NavLink>
              </li>
              <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
                <NavLink
                  to={"/dashboard/manageItem"}
                  className="flex items-center gap-1"
                >
                  <IoIosList />
                  Manage Items
                </NavLink>
              </li>
              <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
                <NavLink
                  to={"/dashboard/bookings"}
                  className="flex items-center gap-1"
                >
                  <span>
                    <FaBook></FaBook>
                  </span>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
                <NavLink
                  to={"/dashboard/users"}
                  className="flex items-center gap-1"
                >
                  <span>
                    <FaUsers />
                  </span>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center gap-1 text-[8px] lg:text-xl"
                >
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
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
                <NavLink
                  to={"/dashboard/cart"}
                  className="flex items-center gap-1"
                >
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
                  to={"/dashboard/bookins"}
                  className="flex items-center gap-1"
                >
                  <span>
                    <FaCalendarCheck></FaCalendarCheck>
                  </span>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* divider here shared Navlinks */}
          <div className="divider"></div>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink to={"/"} className="flex items-center gap-1">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink to={"/menu"} className="flex items-center gap-1">
              <FaBars></FaBars> Menu
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink to={"/order"} className="flex items-center gap-1">
              <FaStore></FaStore> Our Shop
            </NavLink>
          </li>
          <li className="border-2 border-yellow-300 rounded-xl lg:shadow-xl mt-2 text-start pl-2 text-[10px] lg:text-xl">
            <NavLink
              to={"/dashboard/contact"}
              className="flex items-center gap-1"
            >
              <FaEnvelope></FaEnvelope>Contact
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