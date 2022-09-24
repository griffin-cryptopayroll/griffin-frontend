import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import { iconStyle } from "../../styles/globals";
import { postEmployeeApi } from "../../api/employee";

export default function NewEmployeeForm({ addEmployee, hideNewEmployeeForm }) {
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        email: "",
        position: "",
        account: "",
        payroll: 0,
        curr: "usdc",
        date: 0,

        // TODO should add & edit this data
        employType: "free",
        key: 2207,
    });
    const [errorMsg, setErrorMsg] = useState();

    const validateEmployee = async () => {
        // TODO perform validation
        // name must be unique

        // TODO post new employee to server
        // TODO save employerID and use it using recoil or something states management
        console.log("awgeawwea", newEmployee.date + newEmployee.payroll);
        postEmployeeApi(1, newEmployee) // example code using api, example just put 1
            .then(res => {
                console.log(res);
                addEmployee(newEmployee);
                hideNewEmployeeForm();
            }).catch(err => {
                alert(err)
            })

    };

    return (
        <div className="flex-col p-5 space-y-3 ">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">New Employee</div>
                <XMarkIcon
                    className={iconStyle + " cursor-pointer"}
                    onClick={hideNewEmployeeForm}
                />
            </div>
            {Object.keys(newEmployee).map((property, i) => (
                // eslint-disable-next-line react/no-unknown-property
                <div key={i}>
                    <label>{property}</label>
                    <input
                        type="text"
                        placeholder={property}
                        className="w-full p-2 rounded bg-stone-100"
                        value={newEmployee[property]}
                        onChange={({ target }) => {
                            setNewEmployee((prevState) => ({
                                ...prevState,
                                [property]: target.value,
                            }));
                        }}
                    />
                </div>
            ))}
            {/* use pre tag to preserve space */}
            <pre>{errorMsg ?? " "}</pre>
            <Button label="Add" onClickHandler={validateEmployee} />
        </div>
    );
}
