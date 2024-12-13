import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="Refresh Item"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                defaultValue={name}
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="flex gap-6">
            {/* category */}

            <div className="w-full">
              <label className="form-control my-6">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue={category}
                  {...register("Category", { required: true })}
                  className="select select-bordered"
                >
                  <option disabled value="default">
                    select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>

            {/* price */}
            <div className="w-full">
              <label className="form-control my-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  defaultValue={price}
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>

          {/* recipe details */}

          <label className="form-control my-6">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input"
            />
          </div>
          <button className="btn uppercase w-full">
            Update menu Item <FaUtensils className="m-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
