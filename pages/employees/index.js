import Navbar from "../../components/Nav"
import SidePanel from "../../components/SidePanel"
import EmployeeList from "../../components/employee/EmployeeList"

export default function Emplopyees() {
    return (
        <div className="wrapper flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-auto">
                <SidePanel />
                <EmployeeList />
            </div>
        </div>
    )
}

