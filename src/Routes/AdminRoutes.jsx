import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = ({children}) => {
    const{user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    const location=useLocation();
    if (loading || isAdminLoading) {
      return <progress className="progress w-56"></progress>;
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to={"/"} state={location.pathname}></Navigate>;
   
};

export default AdminRoutes;