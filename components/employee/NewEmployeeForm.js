
import { useState, useEffect } from "react"
import { XMarkIcon } from "@heroicons/react/24/solid"
import Button from "../Button"
import { iconStyle } from "../../styles/globals"

export default function NewEmployeeForm({ addEmployee, hideNewEmployeeForm }) {

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
        // name must be unique

        // TODO post new employee to server
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
                Object.keys(newEmployee).map((property, i) => (
                    <div key={i}>
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