import { FiEdit, FiTrash } from "react-icons/fi";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart,refetch]=useCart();
    const totalPrice=cart.reduce((total,item)=>{
        return total+item.price;
    },0);
    const axiosSecure=useAxiosSecure();
    const handleDelete=id=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            
            //delete request to the server
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                if(res.data.deletedCount>0)
                {
                    
                    refetch();
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                }
            })
          }
        });
    }
    return (
      <div className="overflow-hidden">
        {/* heading part */}
        <div className="p-4 flex justify-evenly">
          <h2 className="text-xs md:text-xl lg:text-4xl">
            Total Items : {cart.length}
          </h2>
          <h2 className="text-xs md:text-xl lg:text-4xl">
            Total Price : {totalPrice}
          </h2>
        </div>
        {/* table part */}
        <div className="p-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                  Item Image
                </th>
                <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                  Item Name
                </th>
                <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                  Item Price
                </th>
                <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                  Action 1
                </th>
                <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                  Action 2
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="px-1 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-1 py-2 text-xs md:text-sm lg:text-base">
                    {item.name}
                  </td>
                  <td className="px-1 py-2 text-xs md:text-sm lg:text-base">
                    {item.price}
                  </td>
                  <td className="px-1 py-2">
                    <button className="bg-blue-500 text-white px-1 py-1 rounded text-xs md:text-sm lg:text-base">
                      <FiEdit></FiEdit>
                    </button>
                  </td>
                  <td className="px-1 py-2">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-1 py-1 rounded text-xs md:text-sm lg:text-base"
                    >
                      <FiTrash></FiTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Cart;