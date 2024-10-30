import { Link, useNavigate} from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { GoArrowLeft } from "react-icons/go";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useState} from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { profile, CreateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Signed up user", user);
        // Update profile
        profile(user, name)
          .then(() => {
            //send user info to the db
            navigate('/');
            const userInfo = {
              name: name,
              email: email,
            };
            console.log("email from sign in page",userInfo)
            axiosPublic
              .post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    title: "User created successfully",
                    icon: "success",
                    position: "top",
                  });
                }
              })
              .catch((error) => console.log(error.message));
          })
          .catch((error) =>
            console.log("Profile update error:", error.message)
          );
      })
      .catch((error) => {
        console.log("Sign up error:", error.message);
      });
  };
  
  return (
    <div className="max-w-7xl relative mx-auto flex flex-col lg:flex-row space-y-6 items-center justify-center text-center px-8 py-8 lg:w-[1000px] lg:h-[500px] bg-zinc-900 border-blue-600 rounded shadow-4xl lg:mt-16 font-cinzel border-2">
      <Link to={"/"} className="absolute top-0 left-0 p-4">
        <button className="text-base border-2 border-yellow-200 space-y-2 space-x-4 px-2 text-white">
          <GoArrowLeft />
        </button>
      </Link>
      <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-4 text-white">
        <h2 className="text-5xl text-blue-600 font-bold">Sign Up</h2>
        <p className="lg:w-[400px] text-gray-300">
          Enter your details below to access your account and manage your orders
          seamlessly.
        </p>
      </div>
      <div className="lg:w-1/2 bg-gray-600 px-2 py-6 border rounded">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="label">
              <span className="label-text text-blue-400 font-bold">
                Your Name
              </span>
            </label>
            <input
              className="border-2 border-black rounded text-center"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-blue-400 font-bold">Email</span>
            </label>
            <input
              className="border-2 border-black rounded text-center"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-blue-400 font-bold">
                Password
              </span>
            </label>
            <input
              className="border-2 text-center border-black rounded"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="text-white border rounded shadow-xl w-16 hover:bg-yellow-400 hover:text-black 
              "
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-white pt-2">
          Already Signed Up? Please{" "}
          <button className="link btn-outline text-yellow-400">
            <Link to={"/login"}>Login</Link>
          </button>
          <div className="divider divider-neutral">or</div>
          <SocialLogin></SocialLogin>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
