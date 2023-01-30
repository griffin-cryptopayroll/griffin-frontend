import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { getEmployerApi } from "../api/employerAPIs";

// export type User = {
//     isLoggedIn: boolean;
//     login: string;
// };

const fetcher = employerId => getEmployerApi(employerId).then(res => res.data);

export default function useUser({
    redirectTo = ""
} = {}) {
    const { data: user, mutate: mutateUser } = useSWR("", fetcher);

    useEffect(() => {
        if (!redirectTo || !user) return;

        if (redirectTo && !user?.isLoggedIn) {
            Router.push(redirectTo);
        }
    }, [user, redirectTo]);

    return {user, mutateUser};
}