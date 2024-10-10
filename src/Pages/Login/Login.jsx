import { useState } from "react";

const Login = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  // Function to generate a random CAPTCHA
  function generateCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput === captcha) {
      alert("CAPTCHA matched! Proceeding with login...");
      // Handle login logic here using email and password
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      alert("CAPTCHA did not match. Please try again.");
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row space-y-6 items-center justify-center text-center px-8 py-8 lg:w-[1000px] lg:h-[500px] bg-slate-200 border rounded shadow-4xl lg:mt-16 font-cinzel">
      <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-5xl font-bold">Login</h2>
        <p className="lg:w-[400px]">
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
              <span className="text-white label-text font-bold">Email</span>
            </label>
            <input
              className="border-2 border-black rounded text-center"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-bold text-white">Password</span>
            </label>
            <input
              className="border-2 text-center border-black rounded"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text font-bold text-white">Captcha</span>
            </label>
            <div className="border-2 border-black rounded text-center bg-white py-2">
              {captcha}
            </div>
            <input
              className="border-2 border-black rounded text-center mt-2"
              type="text"
              name="captcha"
              placeholder="Type the CAPTCHA above"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              name="login"
              className="text-white border rounded shadow-xl w-16 hover:bg-yellow-400 hover:text-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
