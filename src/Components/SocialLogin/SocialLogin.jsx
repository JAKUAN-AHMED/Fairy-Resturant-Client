import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { google } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSocialLogin = () => {
    google()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
        };
        console.log("user info", res);
        //post to db
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Successfully Loged with Google",
                icon: "success",
              });
              console.log(res.data);
            }
            navigate(location.state ? location?.state : "/");
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="border-2 lg:rounded-full  p-2 flex items-center justify-center lg:w-1/2">
        <button onClick={handleSocialLogin} className="flex items-center gap-2">
          <FaGoogle className="text-blue-400"></FaGoogle>Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
