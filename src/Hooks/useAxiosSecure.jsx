import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axisoSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    const navigate=useNavigate();
    const {LogOut}=useAuth();
  //request interceptors to add authorization header for every secure call to api
  axisoSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
    //   console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  //response interceptors || status error
  axisoSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async(error)=> {
      console.log('error is',error)
      const status =error.response.status;
      if (status == 401 || status == 403)
      {
        await LogOut();
        navigate('/login')
      }
      return Promise.reject(error);
    }
  );
  return axisoSecure;
};

export default useAxiosSecure;
