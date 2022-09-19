import Navbar from "../../components/Nav";
import SidePanel from "../../components/SidePanel";

export default function Dashboard() {

    return <div className="flex-col h-screen w-screen">
        <Navbar>

        </Navbar>
        <div className="flex grow">
            <SidePanel />

        </div>

    </div>
}