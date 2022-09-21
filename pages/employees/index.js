import Button from "../../components/Button"
import Navbar from "../../components/Nav"
import SidePanel from "../../components/SidePanel"
import { useState, useEffect } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { iconStyle } from "../../styles/globals"
import Modal from "../../components/Modal"

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
    {
        key: 4444444,
        name: "Vitalik B",
        email: "vitalik.eth",
        position: "grandmaster",
        account: "0x0100000000000",
        payroll: 0,
        curr: "eth",
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
                <EmployeeList data={data} />
            </div>
        </div>
    )
}

function EmployeeList(props) {

    const [empData, setEmpData] = useState()
    const [searchToken, setSearchToken] = useState("")
    const [newEmployeeForm, setNewEmployeeForm] = useState(false)

    // initialization
    useEffect(() => {
        // TODO fetch employee data

        setEmpData(data)
    })

    const addEmployee = (emp) => {
        setEmpData(empData.push(emp))
    }

    const showNewEmployeeForm = () => {
        setNewEmployeeForm(true)
    }
    const hideNewEmployeeForm = () => {
        setNewEmployeeForm(false)
    }

    return (
        <div className="px-8 py-5 bg-stone-100 h-full w-full">
            <div className="mb-3 text-3xl font-semibold">Employees</div>
            {newEmployeeForm &&
                <Modal>
                    <NewEmployeeForm
                        addEmployee={addEmployee}
                        hideNewEmployeeForm={hideNewEmployeeForm}
                    />
                </Modal>}
            <div className="mb-3 flex justify-between space-x-2 items-center">
                <input className="flex-1 mr-5 px-4 py-2 bg-white text-slate-500 rounded-lg outline-white focus:outline-stone-300 transition-all"
                    type="text"
                    placeholder="search employee by name"
                    value={searchToken}
                    onChange={(e) => setSearchToken(e.target.value)}
                />
                <Button
                    size="sm"
                    label="Add Employee"
                    onClickHandler={showNewEmployeeForm}
                />
                <Button
                    size="sm"
                    label="Pay"
                />

            </div>

            <div className="w-full">
                <div className="w-full grid grid-cols-6 gap-6 font-bold p-4">
                    <div>name</div>
                    <div>role</div>
                    <div>email</div>
                    <div>payment amount</div>
                    <div>currency</div>
                    <div>pay day</div>
                </div>
                <div>
                    {props.data
                        .filter(({ name }) => name.toLowerCase().includes(searchToken.toLowerCase()))
                        .map((employee) => (
                            <EmployeeListItem key={employee.key} data={employee} />
                        ))}
                </div>
            </div>
        </div>
    )
}

function EmployeeListItem({ data }) {

    const handlePayment = () => {

    }

    const handleDelete = () => { }

    const { key, name, email, position, account, payroll, curr, date, secLeft } = data

    return (
        <div className="w-full grid grid-cols-6 gap-6 rounded-lg items-center bg-white p-4 m-2">
            <div>{name ?? "--"}</div>
            <div>{position ?? "--"}</div>
            <div>{email ?? "--"}</div>
            <div>{payroll ?? "--"}</div>
            <div>{curr ?? "--"}</div>
            <div>{date ?? "--"}</div>
            {/* <div>
                <Button
                    label="Pay"
                    size="sm"
                    onClickHander={handlePayment}
                />
            </div> */}
        </div>
    )
}

function NewEmployeeForm({ addEmployee, hideNewEmployeeForm }) {

    const [newEmployee, setNewEmployee] = useState({
        name: "asd",
        email: "f",
        position: "",
        account: "",
        payroll: 0,
        curr: "usdc",
        date: 0,
    })
    const [errorMsg, setErrorMsg] = useState()

    const validateEmployee = () => {
        // TODO perform validation

        addEmployee(newEmployee)
        hideNewEmployeeForm()
    }

    return (
        <div className=" p-5 flex-col space-y-3">
            <div className="flex justify-between">
                <div className="font-semibold text-2xl">New Employee</div>
                <XMarkIcon className={iconStyle + " cursor-pointer"} onClick={hideNewEmployeeForm} />
            </div>
            {
                Object.keys(newEmployee).map((property) => (
                    <div>
                        <label>{property}</label>
                        <input
                            type="text"
                            placeholder={property}
                            className="w-full bg-stone-100 p-2 rounded"
                            value={newEmployee[property]}
                            onChange={({ target }) => {
                                setNewEmployee(prevState => ({ ...prevState, [property]: target.value }))
                            }} />
                    </div>
                ))

            }
            {/* use pre tag to preserve space */}
            <pre>
                {errorMsg ?? " "}
            </pre>
            <Button
                label="Add"
                onClickHandler={validateEmployee}
            />
        </div>
    )
}