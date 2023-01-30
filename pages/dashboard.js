import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Dash from "../components/dashboard/Dash";
import Navbar from "../components/Nav";
import SidePanel from "../components/SidePanel";
import { authState } from "../states";
import useUser from "../lib/useUser";

export default function Dashboard() {
    // const auth = useRecoilValue(authState)
    const { user } = useUser({
        redirectTo: "/auth",
      });

    // useEffect(() => {
    //     // check for auth
    //     if (!auth) {
    //         // router.push('/auth')
    //         return
    //     }

    //     // fetch dashbaord data from API

    // }, [])

    return (
        // auth ?
        user && (
            <div className="flex flex-col h-screen w-screen overflow-hidden">
                <Navbar></Navbar>
                <div className="flex grow">
                    <SidePanel />
                    <div className="p-10 bg-stone-100 rounded-tl-lg grow">
                        <Dash />
                    </div>
                </div>

            </div>
        )
        // :
        // <></>
    )
}