import { useState, useEffect } from 'react'
import { dummyEmpData } from '../dummies'
import Button from "../Button"
import Modal from "../Modal"
import EmployeeListItem from "./EmployeeListItem"
import NewEmployeeForm from "./NewEmployeeForm"

export default function EmployeeList(props) {

    const [empData, setEmpData] = useState(null)
    const [searchToken, setSearchToken] = useState("")
    const [newEmployeeForm, setNewEmployeeForm] = useState(false)

    // initialization
    useEffect(() => {
        // TODO fetch employee data

        setEmpData(dummyEmpData) // TODO transform data
    })

    const addEmployee = (emp) => {
        setEmpData(empData.push(emp))
    }

    const showNewEmployeeForm = () => {
        console.log(empData)
        setNewEmployeeForm(true)
    }
    const hideNewEmployeeForm = () => {
        console.log(empData)
        console.log(typeof empData)
        setNewEmployeeForm(false)
    }

    return (
        <>
            <div className="mb-3 text-3xl font- select-none">Employee Roster</div>
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
                    label="+ Add Employee"
                    onClickHandler={showNewEmployeeForm}
                />
                {/* <Button
                    size="sm"
                    label="Pay"
                /> */}

            </div>

            <div className="w-full">
                <div className="w-full grid grid-cols-6 gap-6 font-bold p-2 select-none">
                    <div>name</div>
                    <div>role</div>
                    <div>email</div>
                    <div>payment amount</div>
                    <div>currency</div>
                    <div>scheduled</div>
                </div>
                <div className="max-h-full overflow-auto">
                    {empData?.length ?
                        empData
                            .filter(({ name }) => name.toLowerCase().includes(searchToken.toLowerCase()))
                            .map((employee, i) => ( // TODO once connected to backend, remove i
                                <EmployeeListItem key={employee.key ?? i} data={employee} />
                            ))
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

