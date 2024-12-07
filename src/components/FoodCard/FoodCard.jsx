import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth;
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (user && user.email) {
      // TOdo send cart item to the database
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
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className="absolute right-0 mr-12 mt-12 border rounded-xl p-2 bg-slate-800 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 bg-black uppercase"
            >
              Add to cart
            </button>
          </div>
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
