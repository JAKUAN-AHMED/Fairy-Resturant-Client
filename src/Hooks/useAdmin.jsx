import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axisoSecure=useAxiosSecure();
    const {user}=useAuth();
    const {data:isAdmin,isPending:isAdminLoading}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async()=>{
            const res=await axisoSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.Admin
        }
    })
    return [isAdmin,isAdminLoading]
   
};

export default useAdmin;