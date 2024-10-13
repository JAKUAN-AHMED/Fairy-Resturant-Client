import { useContext,useEffect,useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("");
  const {profile,CreateUser}=useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Signed up user", user);
        // Update profile
        profile(user, name)
          .then(() => {
            return user.reload(); // Reload the user to fetch updated profile data
          })
          .then(() => {
            console.log("Profile updated successfully", user.displayName);
          })
          .catch((error) =>
            console.log("Profile update error:", error.message)
          );
      })
      .catch((error) => {
        console.log("Sign up error:", error.message);
      });

  };
  useEffect(()=>{
   console.log(name, email, password);

  },[email,name,password])
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row space-y-6 items-center justify-center text-center px-8 py-8 lg:w-[1000px] lg:h-[500px] bg-zinc-900 border-blue-600 rounded shadow-4xl lg:mt-16 font-cinzel border-2">
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
              <span className="label-text text-blue-400 font-bold">Your Name</span>
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
            Already Signed Up? Please <button className="link btn-outline text-yellow-400"><Link to={'/login'}>Login</Link></button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
