import { useState, useEffect } from 'react'
import { dummyEmpData } from '../dummies'
import Button from "../buttons/Button"
import Modal from "../Modal"
import EmployeeListItem from "./EmployeeListItem"
import NewEmployeeForm from "./NewEmployeeForm"
import { getAllEmployeesApi } from '../../api/employeeAPIs'

export default function EmployeeList(props) {

    const [empData, setEmpData] = useState([])
    const [searchToken, setSearchToken] = useState("")
    const [newEmployeeForm, setNewEmployeeForm] = useState(false)
    const [loading, setLoading] = useState(false)

    // initialization
    useEffect(() => {
        // TODO fetch employee data
        setLoading(true)
        getAllEmployeesApi("6697a96b-2325-4351-ac7f-279956612dc6")
            .then(({ data }) => {
                setEmpData(data)
                setLoading(false)
            })

        // TODO transform data
    }, [])

    const addEmployee = (emp) => {
        // console.log(emp)
        setEmpData(prevState => [...prevState, emp])
    }

    const deleteEmployee = (employeeId) => {
        setEmpData(prevState => prevState.filter(({ key }) => key !== employeeId))
    }

    const showNewEmployeeForm = () => {
        // console.log(empData)
        setNewEmployeeForm(true)
    }
    const hideNewEmployeeForm = () => {
        // console.log(empData)
        // console.log(typeof empData)
        setNewEmployeeForm(false)
    }

    return (
        <>
            <div className="mb-3 text-3xl font-semibold select-none">Employee Roster</div>
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

            <div className="w-full grow flex flex-col overflow-hidden">
                <div className="w-full grid grid-cols-6 gap-6 font-bold p-2 select-none">
                    <div>name</div>
                    <div>role</div>
                    <div>email</div>
                    <div>payment amount</div>
                    <div>currency</div>
                    <div>scheduled</div>
                </div>
                <div className="flex-auto h-0 overflow-auto overscroll-none">
                    {empData?.length ?
                        empData
                            .filter(({ name }) => name.toLowerCase().includes(searchToken.toLowerCase()))
                            .map((employee, i) => ( // TODO once connected to backend, remove i
                                <EmployeeListItem
                                    key={i}
                                    data={employee}
                                    removeFromEmployeeList={deleteEmployee}
                                />
                            ))
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

