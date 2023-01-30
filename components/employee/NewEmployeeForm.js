import { useState } from "react";
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
    const [empType, setEmpType] = useState()

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
            end: event.target.endDate?.value.split("-").join("")
        }

        postEmployeeApi(newEmployee)
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
                <label htmlFor="name" className="font-light">Name</label>
                <input
                    id="name"
                    name="name"
                    className="w-full p-2 rounded bg-stone-100 mb-3"
                    type="text"
                    pattern="[a-zA-Z .,'-]+"
                    title="Please enter a valid name."
                    required
                    placeholder="" />

                <label htmlFor="position" className="font-light">Position</label>
                <input
                    id="position"
                    name="position"
                    className="w-full p-2 rounded bg-stone-100 mb-3"
                    type="text"
                    placeholder="" />

                <label htmlFor="wallet" className="font-light">Wallet</label>
                <input
                    id="wallet"
                    name="wallet"
                    className="w-full p-2 rounded bg-stone-100 mb-3"
                    type="text"
                    pattern="0x[a-fA-F0-9]{40}"
                    title="The wallet address should be 42 characters long starting with 0x."
                    required
                    placeholder="0x..." />

                <label htmlFor="email" className="font-light">Email</label>
                <input
                    id="email"
                    name="email"
                    className="w-full p-2 rounded bg-stone-100 mb-3"
                    type="email"
                    required
                    placeholder="example@domain.com" />

                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <label htmlFor="payroll" className="font-light">Payment Amount</label>
                        <input
                            id="payroll"
                            name="payroll"
                            className="w-full p-2 rounded bg-stone-100 mb-3"
                            type="number"
                            min="0"
                            step="any"
                            required
                            placeholder="100" />
                    </div>
                    <div className="col-span-1 w-full h-full">
                        <label htmlFor="currency" className="font-light">Currency</label>
                        <select
                            id="currency"
                            name="currency"
                            className="w-full p-2 pb-3 rounded bg-stone-100 mb-3"
                            required>
                            {SUPPORTED_CURRENCIES.map((currency, i) => (
                                // eslint-disable-next-line react/no-unknown-property
                                <option key={i} value={currency + "USDT"}>{currency}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <label htmlFor="payFrequency" className="font-light">Frequency</label>
                <select
                    id="payFrequency"
                    name="payFrequency"
                    className="w-full p-2 rounded bg-stone-100 mb-3"
                    required>
                    <option value="W">Weekly</option>
                    <option value="D">Daily</option>
                </select>

                <label htmlFor="employmentType" className="font-light">Employment Type</label>
                <select
                    id="employmentType"
                    name="currenemploymentTypecy"
                    className="w-full p-2 rounded bg-stone-100 mb-3"
                    onChange={(e) => {
                        setEmpType(e.target.value)
                        // console.log(e.target.key)
                    }}
                    required>
                    {EMPLOYMENT_TYPES.map((type, i) => (
                        // eslint-disable-next-line react/no-unknown-property
                        <option key={i} value={type}>{type[0].toUpperCase() + type.substring(1)}</option>
                    ))}
                </select>

                <div className="flex space-x-3 mb-5">
                    <div className="w-full">
                        <label htmlFor="startDate" className="font-light">Start Date</label>
                        <input
                            id="startDate"
                            name="startDate"
                            className="w-full p-2 rounded bg-stone-100 mb-3"
                            type="date"
                            required />
                    </div>
                    {empType === 'freelance' ?
                        <div className="w-full">
                            <label htmlFor="endDate" className="font-light">End Date</label>
                            <input
                                id="endDate"
                                name="endDate"
                                className="w-full p-2 rounded bg-stone-100 mb-3"
                                type="date"
                                required />
                        </div>
                        :
                        <></>
                    }

                </div>

                <div className="w-full flex justify-end">
                    <Button
                        type="submit"
                        size="sm"
                        className="self-end">
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
}
