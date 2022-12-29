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
    'permanent',
    'freelance'
]

export default function NewEmployeeForm({ addEmployee, hideNewEmployeeForm }) {
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        position: "",
        wallet: "",
        payroll: 0,
        currency: "USDC",
        email: "",
        start: 0,
        end: 0,
        pay_freq: "",
        employ_type: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newEmployee = {
            name: event.target.name.value,
            position: event.target.position.value,
            wallet: event.target.wallet.value,
            payroll: event.target.payroll.value,
            currency: event.target.currency.value,
            pay_freq: event.target.payFrequency.value,
            email: event.target.email.value,
            employer_gid: "2cb6b685-47b0-4299-bf6a-cb9bd8248f0d", // TO DO: get employer GID
            employ_type: event.target.employmentType.value,
            start: event.target.startDate.value.split("-").join(""),
            end: event.target.endDate.value.split("-").join("")
        }

        postEmployeeApi(1, newEmployee) // TO DO: get employer ID
         .then(response => {
            addEmployee(newEmployee);
            hideNewEmployeeForm();
         }).catch(error => {
            alert(error);
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

                <label htmlFor="payFrequency">Frequency</label>
                <select 
                    id="payFrequency" 
                    name="payFrequency"
                    className="w-full p-2 rounded bg-stone-100"
                    required>
                    <option value="D">Daily</option>
                    <option value="W">Weekly</option>
                </select>

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    className="w-full p-2 rounded bg-stone-100"
                    type="email"
                    required
                    placeholder="example@domain.com"/>

                <label htmlFor="employmentType">Employment Type</label>
                <select 
                    id="employmentType" 
                    name="currenemploymentTypecy"
                    className="w-full p-2 rounded bg-stone-100"
                    required>
                    {EMPLOYMENT_TYPES.map((type, i) => (
                        <option key={i} value={type}>{type[0].toUpperCase() + type.substring(1)}</option>
                    ))}
                </select>

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

                <button type="submit">Add</button>
            </form>
        </div>
    );
}
