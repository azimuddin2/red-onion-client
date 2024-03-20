import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
    const { user } = useAuth();

    const { data: carts = [], refetch, isLoading, error } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://red-onion-server-sigma.vercel.app/carts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    return [carts, refetch, isLoading, error];
}

export default useCart;