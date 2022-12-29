import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "../buttons/Button";
import { iconStyle } from "../../styles/globals";
import { postEmployeeApi } from "../../api/employeeAPIs";

const SUPPORTED_CURRENCIES = [
    'ETH',
    'MATIC',
    'USDC',
];

const EMPLOYMENT_TYPES = [
    'Permanent',
    'Freelance'
]

export default function NewEmployeeForm({ addEmployee, hideNewEmployeeForm }) {
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        position: "",
        wallet: "",
        payroll: 0,
        curr: "usdc",
        email: "",
        start: 0,
        end: 0,
        pay_freq: "",
        payday: "",
        employ_type: ""
    });

    const validateEmployee = async () => {
        // TODO perform validation

        // REQ - str: name

        // OPT - str: position

        // REQ - str: wallet
        // wallet follows nightfall wallet format

        // REQ - num: payroll
        // (maybe) cap max amount according to balance and projected payroll

        // REQ - str: email
        // email must follow format: [abc]@[abc].[abc]
        // Server Validation: email must be unique

        // REQ - date: start
        // (maybe) start date may not be one pay cycle prior to today

        // OPT - date: end
        // end date must be no earlier than start date

        //pay_freq: "",
        //payday: "",
        //employ_type: ""

        //  post new employee to server
        // TODO save employerID and use it using recoil or something states management
        console.log("awgeawwea", newEmployee.date + newEmployee.payroll);
        postEmployeeApi(1, newEmployee) // example code using api, example just put 1
            .then(res => {
                console.log(res);
                addEmployee(newEmployee);
                hideNewEmployeeForm();
            }).catch(err => {
                alert(err)
                setErrorMsg(err)
            })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            position: event.target.position.value,
            wallet: event.target.wallet.value,
            payroll: event.target.payroll.value,
            currency: event.target.currency.value,
            email: event.target.email.value
        }
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input  
                    id="name" 
                    name="name"
                    className="w-full p-2 rounded bg-stone-100"
                    type="text"
                    pattern="[a-zA-Z .,'-]+"
                    title="Please enter a valid name."
                    required
                    placeholder="John Doe"/>
                
                <label htmlFor="position">Position</label>
                <input  
                    id="position" 
                    name="position"
                    className="w-full p-2 rounded bg-stone-100"
                    type="text"
                    placeholder="CEO"/>

                <label htmlFor="wallet">Wallet</label>
                <input 
                    id="wallet" 
                    name="wallet"
                    className="w-full p-2 rounded bg-stone-100"
                    type="text"
                    pattern="0x[a-fA-F0-9]{40}"
                    title="The wallet address must be a 42-characters hexadecimal number."
                    required
                    placeholder="0x..."/>

                <label htmlFor="payroll">Payroll</label>
                <input 
                    id="payroll"
                    name="payroll"
                    className="w-full p-2 rounded bg-stone-100"
                    type="number"
                    min="0"
                    required
                    placeholder="0"/>

                <label htmlFor="currency">Currency</label>
                <select 
                    id="currency" 
                    name="currency"
                    className="w-full p-2 rounded bg-stone-100"
                    required>
                    {SUPPORTED_CURRENCIES.map((currency, i) => (
                        <option key={i} value={currency + "USDT"}>{currency}</option>
                    ))}
                </select>

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    className="w-full p-2 rounded bg-stone-100"
                    type="email"
                    required
                    placeholder="example@domain.com"/>

                <label htmlFor="startDate">Start Date</label>
                <input
                    id="startDate"
                    name="startDate"
                    className="w-full p-2 rounded bg-stone-100"
                    type="date"
                    required />
                
                <label htmlFor="endDate">End Date</label>
                <input
                    id="endDate"
                    name="endDate"
                    className="w-full p-2 rounded bg-stone-100"
                    type="date"
                    required />

                <label htmlFor="employmentType">Employment Type</label>
                <select 
                    id="employmentType" 
                    name="currenemploymentTypecy"
                    className="w-full p-2 rounded bg-stone-100"
                    required>
                    {EMPLOYMENT_TYPES.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                    ))}
                </select>

                <button type="submit">Add</button>
            </form>
        </div>
    );
}
