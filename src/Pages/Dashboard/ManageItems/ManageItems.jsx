import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";


const ManageItems = () => {
  const [menu,refetch]=useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="manage items" subheading="hurry up" />
      {/* table */}
      <div className="p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                {" "}
                Item Image
              </th>
              <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                Item Name
              </th>
              <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                Price
              </th>
              <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                Update
              </th>
              <th className="px-1 py-2 text-left text-xs md:text-sm lg:text-base">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="px-1 py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="text-xs md:text-sm lg:text-base px-1 py-2">
                  {item.name}
                </td>
                <td className="text-xs md:text-sm lg:text-base px-1 py-2">
                  {item.price}
                </td>
                <td className="px-1 py-2">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="bg-blue-500 text-white px-1 py-1 rounded text-xs md:text-sm lg:text-base">
                      <FiEdit></FiEdit>
                    </button>
                  </Link>
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

export default ManageItems;
