import { TrashIcon, XMarkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import { deleteEmployeeApi } from "../../api/employeeAPIs";
import { iconStyle } from "../../styles/globals";
import Button from "../buttons/Button";
import Modal from "../Modal";

export default function EmployeeListItem({ data, removeFromEmployeeList }) {
    console.log(data)
    const [expanded, setExpanded] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const paySingleEmployee = (empId) => {

    }

    const payAllEmployees = () => {

    }

    const handleDelete = () => {
        if (data) {
            deleteEmployeeApi(1, data.key, "free") // replace hard-coded 1 with employerId stored in global state
                .then((res) => {
                    console.log(res)
                    // re-fetch employee list
                    removeFromEmployeeList(data.key)

                    setDeleteModal(false)
                })
                .catch((err) => {
                    console.log(err)
                })

        }
    }

    const { key, name, email, position, wallet, payroll, date, work_start } = data
    const currency = data.edges.employee_from_currency.ticker
    const empType = data.edges.employee_from_employ_type.is_permanent

    let payFrequency
    switch (data.edges.employee_from_employ_type.pay_freq) {
        case "W":
            payFrequency = "weekly"
            break
        case "D":
            payFrequency = "daily"
            break
    }
    const start = work_start.substring(4, 6) + '/' + work_start.substring(6) + '/' + work_start.substring(0, 4)

    const handleClick = (address) => {
        window.open("https://etherscan.io/address/" + address)
    };

    return (<>
        <div
            className="w-full grid grid-cols-5 gap-6 rounded-lg items-center bg-white p-4 my-2 shadow"
            onClick={() => { setExpanded(prevState => !prevState) }}
        >
            <div>{name ?? "--"}</div>
            <div>{position ?? "--"}</div>
            <div>{email ?? "--"}</div>
            <div>{payroll ?? "--"} {currency ?? "--"}</div>
            <div>{date ?? "--"}</div>
        </div>


        {expanded &&
            <Modal zIndex="5">
                <div className="flex justify-between align-center">
                    <div className="text-3xl font-semibold">{name}</div>
                    <XMarkIcon
                        className={iconStyle + " cursor-pointer"}
                        onClick={() => { setExpanded(false) }}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="font-semibold">Position</div>
                        <div>{position ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Type</div>
                        <div>{empType ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Email</div>
                        <div>{email ?? "--"}</div>
                    </div>

                    <div className="col-span-2">
                        <div className="font-semibold">L1 Wallet Address</div>

                        {wallet ?
                            <div className="flex space-x-2">
                                <span>{wallet}</span>
                                <ArrowTopRightOnSquareIcon
                                    className={iconStyle + " cursor-pointer"}
                                    onClick={() => { handleClick(wallet) }}
                                />

                            </div>
                            :
                            "--"
                        }

                    </div>

                    <div>
                        <div className="font-semibold">Payment Amount</div>
                        <div>{payroll ?? "--"} {currency ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Pay Frequency</div>
                        <div>{payFrequency ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Pay Scheduled</div>
                        <div>{date ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Started on</div>
                        <div>{start ?? "--"}</div>
                    </div>

                </div>
                <div className="pt-3 flex justify-between">
                    <Button
                        label="Pay"
                        size="sm"
                        onClickHandler={(e) => {
                            e.preventDefault()
                            paySingleEmployee(key)
                        }}
                    />
                    <Button
                        label="Delete Employee"
                        size="sm"
                        onClickHandler={() => {
                            setDeleteModal(true)
                        }}
                    />
                </div>
            </Modal>}

        {deleteModal &&
            <Modal>
                <div className="flex flex-col justify-between space-y-20">
                    <div className="text-2xl font-semibold">
                        Are you sure you want to delete {name ? name + "'s" : "this"} record?
                    </div>
                    <div className="flex justify-between">
                        <Button
                            label="Confirm"
                            onClickHandler={handleDelete}
                        />
                        <Button
                            label="Cancel"
                            onClickHandler={() => { setDeleteModal(false) }}
                        />
                    </div>
                </div>
            </Modal>}
    </>
    )
}