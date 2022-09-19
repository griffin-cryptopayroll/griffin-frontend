import Navbar from "../../components/Nav"
import SidePanel from "../../components/SidePanel"

const dummy = [
    {
        "key": 2203,
        "name": "julia bae",
        "email": "juljul123@jul.xyz",
        "position": "smart contract dev",
        "account": "0x01you",
        "payroll": 10000,
        "curr": "usdc",
        "date": 23,
        "secLeft": 1088987.461009
    },
]

export default function Emplopyees() {
    return <div className="flex-col h-screen w-screen">
        <Navbar>

        </Navbar>
        <div className="flex grow">
            <SidePanel />

        </div>

    </div>
}

function EmployeeList() {
    return <div>

    </div>
}

function EmployeeListItem(props) {
    return <div>

    </div>
}