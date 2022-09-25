import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import { deleteEmployeeApi } from "../../api/employee";
import Button from "../Button";
import Modal from "../Modal";

export default function EmployeeListItem({ data, removeFromEmployeeList }) {
    const [expanded, setExpanded] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handlePayment = () => {

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
            <div>
                <Button
                    label="Delete"
                    size="sm"
                    onClickHandler={() => {
                        setDeleteModal(true)
                        console.log("hey")
                    }}
                />
            </div>
        </div>
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