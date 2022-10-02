import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import { deleteEmployeeApi } from "../../api/employee";
import { iconStyle } from "../../styles/globals";
import Button from "../Button";
import Modal from "../Modal";

export default function EmployeeListItem({ data, removeFromEmployeeList }) {
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

    const { key, name, email, position, account, payroll, curr, date, secLeft } = data

    return (<>
        <div
            className="w-full grid grid-cols-6 gap-6 rounded-lg items-center bg-white p-4 my-2 shadow"
            onClick={() => { setExpanded(prevState => !prevState) }}
        >
            <div>{name ?? "--"}</div>
            <div>{position ?? "--"}</div>
            <div>{email ?? "--"}</div>
            <div>{payroll ?? "--"}</div>
            <div>{curr ?? "--"}</div>
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
                        <div className="font-semibold">Email</div>
                        <div>{email ?? "--"}</div>
                    </div>

                    <div className="col-span-2">
                        <div className="font-semibold">Address</div>
                        <div>{account ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Payroll Amount</div>
                        <div>{payroll ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Currency</div>
                        <div>{curr ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Pay Scheduled</div>
                        <div>{date ?? "--"}</div>
                    </div>

                    <div>
                        <div className="font-semibold">Time Left</div>
                        <div>{secLeft ?? "--"}</div>
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