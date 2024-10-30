import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCircle, FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const axisoSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axisoSecure.get("/users");
      return result.data;
    },
  });

  // make admin
  const handleMakeAdmin = (user) => {
    axisoSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: `${user.name} is Admin Now`,
            icon: "success",
          });
          refetch();
        }
      })
      .catch((error) => console.log(error.message));
  };

  // delete User
  const handleDeleteUser = (user) => {
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
        axisoSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} deleted`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="overflow-hidden">
      {/* heading part */}
      <div className="p-4">
        <h2 className="text-xs md:text-xl lg:text-4xl">
          Total Users : {users.length}
        </h2>
      </div>

      {/* table part */}

      <div className="p-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-1 py-1 text-left text-xs md:text-sm lg:text-base">
                Name
              </th>
              <th className="px-1 py-1 text-left text-xs md:text-sm lg:text-base">
                Email
              </th>
              <th className="px-1 py-1 text-left text-xs md:text-sm lg:text-base">
                Roll
              </th>
              <th className="px-1 py-1 text-left text-xs md:text-sm lg:text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="px-1 py-1 text-[8px] md:text-sm lg:text-base">
                  {user.name}
                </td>
                <td className="px-1 py-1 text-[8px] md:text-sm lg:text-base">
                  {user.user ? user.user : user.email}
                </td>
                <td className="px-1 py-1">
                  {user.role == "Admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-[8px] border text-red-400 rounded shadow-xl md:text-sm lg:text-base tooltip  tooltip-bottom"
                      data-tip="Admin"
                    >
                      <FaCircle />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="text-[8px] border bg-purple-700 text-white rounded shadow-xl md:text-sm lg:text-base"
                    >
                      <FaUser></FaUser>
                    </button>
                  )}
                </td>
                <td className="px-1 py-1">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="text-[8px] md:text-sm lg:text-base"
                  >
                    <FaTrash></FaTrash>
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

export default Users;
