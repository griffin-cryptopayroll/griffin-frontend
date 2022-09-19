import Button from "../../components/Button"
import Navbar from "../../components/Nav"
import SidePanel from "../../components/SidePanel"

const data = [
    {
        key: 2203,
        name: "julia bae",
        email: "juljul123@jul.xyz",
        position: "smart contract dev",
        account: "0x01you",
        payroll: 10000,
        curr: "usdc",
        date: 23,
        secLeft: 1088987
    },
]

export default function Emplopyees() {
    return (
        <div className="flex-col h-screen">
            <Navbar></Navbar>
            <div className="flex grow h-full">
                <SidePanel />
                <EmployeeList />
            </div>
        </div>
    )
}

function EmployeeList(props) {
    return (
        <div className="px-8 py-5 bg-stone-100 h-full">
            <div className="mb-3 text-3xl font-semibold">Employees</div>
            <div className="mb-3 flex justify-between space-x-2 items-center">
                <input className="flex-1 mr-5 px-4 py-2 bg-white text-slate-500 rounded-lg outline-white focus:outline-stone-300 transition-all"
                    type="text"
                    placeholder="search employee by name"
                />
                <Button
                    size="sm"
                    label="Add Employee"
                />
                <Button
                    size="sm"
                    label="Pay"
                />
            </div>

            <table className="table-fixed w-full">
                <thead >
                    <tr >
                        <th>name</th>
                        <th>role</th>
                        <th>email</th>
                        {/* <th>account</th> */}
                        <th>payment amount</th>
                        <th>currency</th>
                        <th>pay day</th>
                        {/* <th>time left</th> */}
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((employee) => (
                        <EmployeeListItem data={employee} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function EmployeeListItem({ data }) {

    const handlePayment = () => {

    }

    const { key, name, email, position, account, payroll, curr, date, secLeft } = data

    return (
        <tr key={key}>
            <td>{name ?? "--"}</td>
            <td>{position ?? "--"}</td>
            <td>{email ?? "--"}</td>
            {/* <td>{account}</td> */}
            <td>{payroll ?? "--"}</td>
            <td>{curr ?? "--"}</td>
            <td>{date ?? "--"}</td>
            {/* <td>{secLeft}</td> */}
            {/* <td>
            <Button
                label="Pay"
                size="sm"
                onClickHander={handlePayment}
            />
        </td> */}
        </tr>
    )
}