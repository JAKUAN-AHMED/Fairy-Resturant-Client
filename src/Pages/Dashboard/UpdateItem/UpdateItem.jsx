import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]); // Adjust for multipart upload

    const res = await axiosPublic.post(image_hoisting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url, // Ensure correct path
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          title: `${data.name} is updated`,
          icon: "success",
        });
        reset(); // Reset the form only after success
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="update an item"
        subheading="new info"
      ></SectionTitle>
      {/* update form */}
      <div>
        <form
          className="bg-purple-200 border rounded shadow-xl p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* recipe name */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe_Name"
              className="input input-bordered"
              defaultValue={name}
              {...register("name", { required: true })}
            />
          </div>
          {/* category and price */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            {/* category */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="default">
                  Category
                </option>
                <option>pizza</option>
                <option>salad</option>
                <option>soup</option>
                <option>dessert</option>
                <option>drinks</option>
                <option>offered</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                className="input input-bordered"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              className="textarea textarea-primary md:w-[600px] md:h-40"
              placeholder="Recipe Details"
              defaultValue={recipe}
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          {/* file input */}
          <div className="form-control mt-2">
            <input
              //   value={image}
              {...register("image", { required: true })}
              type="file"
              className="file-input-xs md:file-input-sm lg:file-input-md max-w-xs"
            />
          </div>
          {/* submit */}
          <button
            type="submit"
            className="btn btn-primary bg-gray-600 text-white md:w-[20%] mt-4"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
