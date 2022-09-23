import Dash from "../components/dashboard/Dash";
import Navbar from "../components/Nav";
import SidePanel from "../components/SidePanel";


export default function Dashboard() {

    return <div className="flex flex-col h-screen w-screen">
        <Navbar>

        </Navbar>
        <div className="flex grow">
            <SidePanel />
            <div className="p-10 bg-stone-100 rounded-tl-lg grow">
                <Dash />
            </div>
        </div>

    </div>
}