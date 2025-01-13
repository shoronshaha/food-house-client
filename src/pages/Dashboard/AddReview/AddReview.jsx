import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AddReview() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    details: "",
    rating: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.details && newReview.rating) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "successfully review added",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(true);
      try {
        const { data } = await axios.post(
          "http://localhost:5000/reviews",
          newReview
        );
        setReviews((prevReviews) => [data, ...prevReviews]);
        setNewReview({ name: "", details: "", rating: "" });
      } catch (err) {
        setError("Failed to post review");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold text-center mb-6">User Reviews</h1>

      {/* Add Review Form */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold">Add a Review</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-gray-900 text-white"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Rating (0-5)"
              className="input input-bordered bg-gray-900 text-white"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: e.target.value })
              }
              required
            />
          </div>
          <textarea
            placeholder="Review Details"
            className="textarea textarea-bordered bg-gray-900 text-white mt-4 w-full"
            rows="3"
            value={newReview.details}
            onChange={(e) =>
              setNewReview({ ...newReview, details: e.target.value })
            }
            required
          ></textarea>
          <button
            type="submit"
            className={`btn btn-warning mt-4 ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
    </div>
  );
}

export default AddReview;
