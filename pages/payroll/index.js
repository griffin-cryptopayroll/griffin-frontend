import Navbar from "../../components/Nav"
import SidePanel from "../../components/SidePanel"
import EmployeeList from "../../components/employee/EmployeeList"

export default function Payroll() {

    return (
        <div className="wrapper flex flex-col h-screen overflow-hidden">
            <Navbar />
            <div className="flex flex-auto">
                <SidePanel />
                <div className="px-8 py-5 bg-stone-100 rounded-tl-lg grow flex flex-col">
                    <EmployeeList />
                </div>
            </div>
        </div>
    )
}