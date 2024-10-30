
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const image_hoisting_key=import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
const AddItems = () => {
  const { register, handleSubmit,reset } = useForm();
  const axisoSecure=useAxiosSecure();
  const axiosPublic=useAxiosPublic();
  const onSubmit = async(data) => {
    // upload an image to imgbb and get a url
    const imageFile={image:data.image[0]}
    const res = await axiosPublic.post(image_hoisting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if(res.data.success)
    {
      reset();
      // send image to server 
      const menuItem = {
        name: data.Recipe_Name,
        category: data.category,
        price: parseFloat(data.Price),
        recipe: data.recipeDetails,
        image: res.data.data.display_url,
      };
      console.log('menu Item',menuItem);
      const menuRes = await axisoSecure.post("/menu", menuItem);
      if(menuRes.data.insertedId)
      {
        Swal.fire({
          title: `${data.Recipe_Name} is added to menu`,
          icon: "success",
        });
      }
    }
  };
  return (
    <div className="p-4">
      <SectionTitle heading="add an item" subheading="what's new?" />
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
              {...register("Recipe_Name", { required: true })}
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
              defaultValue='default'
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value='default'>
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
                className="input input-bordered"
                {...register("Price", { required: true })}
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
              {...register('recipeDetails',{required:true})}
            ></textarea>
          </div>
          {/* file input */}
          <div className="form-control mt-2">
            <input {...register('image',{required:true})} type="file" className="file-input-xs md:file-input-sm lg:file-input-md max-w-xs" />
          </div>
          {/* submit */}
          <button type="submit" className="btn btn-primary bg-gray-600 text-white md:w-[20%] mt-4">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
