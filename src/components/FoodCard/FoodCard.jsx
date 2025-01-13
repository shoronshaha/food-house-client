import PropTypes from "prop-types";

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { AuthContext } from "../../providers/AuthProvider";
// import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  // const { user } = useContext(AuthContext);
  // const { user } = useAuth;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  console.log("user", user);

  const handleAddToCart = () => {
    if (user && user.email) {
      //send cart item to the database

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your card`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items cart
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Logged In",
        text: "Please login for add to the Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send to user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-2xl hover border mb-5 ">
      <figure className="px-10 pt-10">
        <img src={image} alt="food" className="rounded-xl" />
      </figure>
      <p className="absolute right-0 mx-12 mt-12 border rounded-xl p-2 bg-slate-800 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 bg-black uppercase"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.node,
};
FoodCard.propTypes = {
  items: PropTypes.node,
};
export default FoodCard;
