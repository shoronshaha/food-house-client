import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading && !!user?.email, // Ensure query only runs when user email is available
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data?.admin || false;
      } catch (error) {
        console.error("Error verifying admin role:", error);
        return false; // Default to non-admin on error
      }
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
