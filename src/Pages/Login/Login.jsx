import {useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoArrowLeft } from "react-icons/go";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputref = useRef();
  const { LogIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  function generateCaptcha() {
    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += char.charAt(Math.floor(Math.random() * char.length));
    }
    return result;
  }

  const handleCaptchaInputChange = () => {
    const input = inputref.current.value;
    if (input === captcha) {
      setDisable(false);
    } else {
      setDisable(true);
      // setCaptcha(generateCaptcha())
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Logging in...");
    LogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("logged user", user);
        //sweet alert
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: true,
          timer: 1500,
        });

        navigate(location.state ? location?.state : "/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row space-y-6 items-center justify-center text-center px-8 py-8 lg:w-[1000px] lg:h-[500px] bg-zinc-900 border-blue-600 rounded shadow-4xl lg:mt-16 font-cinzel border-2">
      <Link to={"/"} className="absolute top-0 left-0 p-4">
        <button className="text-base border-2 border-yellow-200 space-y-2 space-x-4 px-2 text-white">
          <GoArrowLeft />
        </button>
      </Link>
      <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-4 text-white">
        <h2 className="text-5xl text-blue-600 font-bold">Login</h2>
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
              autoComplete={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-blue-400 font-bold">
                Captcha
              </span>
            </label>
            <div className="border-2 border-black rounded text-center bg-white py-2">
              {captcha}
            </div>
            <input
              className="border-2 border-black rounded text-center mt-2"
              type="text"
              name="captcha"
              ref={inputref}
              onChange={handleCaptchaInputChange} // Changed to onChange
              placeholder="Type the CAPTCHA above"
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="submit" // Change to button type submit
              disabled={disable}
              className={`text-white border rounded shadow-xl w-16 hover:bg-yellow-400 hover:text-black ${
                disable ? "btn-disabled bg-red-600" : "bg-purple-400 text-black"
              }`}
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-white pt-2">
          Not Registered Yet ? Please{" "}
          <button className="link btn-outline text-yellow-400">
            <Link to={"/signUp"}>Register</Link>
          </button>
          <div className="divider divider-neutral">or</div>
          <SocialLogin></SocialLogin>
        </p>
      </div>
    </div>
  );
};

export default Login;
