import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // todo : get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/*dashboard side bar content */}
      <div className="w-64 min-h-screen bg-orange-400 uppercase text-black">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  {" "}
                  <FaUtensils />
                  Add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaList />
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <FaBook />
                  manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  {" "}
                  <FaUsers />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <div className="divider"></div>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  {" "}
                  <FaCalendar />
                  User Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  {" "}
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  {" "}
                  <FaAd />
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <FaAd />
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  {" "}
                  <FaAd />
                  Payment
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              {" "}
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
