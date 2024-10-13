import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
const FoodCart = ({ item }) => {
  const { name, recipe, category, price, image, _id } = item;
  const axisoSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart,refetch] = useCart();
  const cartItems = {
    food_id: _id,
    name,
    price,
    category,
    image,
    recipe,
    email:user?.email,
  };
  const navigate=useNavigate();
   const isExist=cart.some((cartItem)=>cartItem.food_id=== _id);
  const handleAddToCart = () => {
    
    if (user && user.email && !isExist) {
      //post cart to db
      axisoSecure.post("/carts", cartItems).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            text: `${name} Successfully Added`,
            icon: "success",
            showConfirmButton: true,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      if(isExist)
      {
        Swal.fire({
          text:"Already existed !",
          icon:"warning",
        })
      }
      else{
        Swal.fire({
          text: "Please Login to add cart to shoping cart",
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "red",
          confirmButtonText: "Login",
          confirmButtonColor: "blue",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/login");
          }
        });
      }
    }
  };
  return (
    <div className="card bg-salte-100 font-cinzel shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <p className="absolute right-[15%] top-[10%] p-2 lg:p-0 bg-gray-900 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-inter">{name}</h2>
        <p className="text-2xl">{category}</p>
        <p className="text-base">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-primary bg-[#111827] text-[#BB8506]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
