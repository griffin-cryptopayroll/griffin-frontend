import { useState, useEffect } from "react";
import { dummyPayrolls } from "../dummies";
import PayrollListItem from "./PayrollListItem";
import Button from "../buttons/Button";
import ConfirmPayment from "./ConfirmPayment";
import Modal from "../Modal";
import Checkbox from "../Checkbox";
import { getSingleEmployeeApi, getPaymentApi } from "../../api/employeeAPIs";

// TO DO: get employer ID
const employeeId = "08e42c43-9ea2-4ba3-aab3-93d8f5d66d94";
const employerId = "2cb6b685-47b0-4299-bf6a-cb9bd8248f0d";

export default function PayrollList(props) {
    const [payrolls, setPayrolls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState([]);
    const [paying, setPaying] = useState(false);
    const [allChecked, setAllChecked] = useState(false);
    const [employee, setEmployee] = useState({
        id: -1,
        name: "",
        role: "",
        currency: "",
        payday: "",
        payroll: 0
    });

    const selectPayroll = (payroll) => {
        setSelected(payrolls => [...payrolls, payroll]);
    };

    const unselectPayroll = (targetId) => {
        setSelected(payrolls => payrolls.filter(({ id }) => id != targetId));
    };

    const cancelPayment = () => setPaying(false);

    const checkAll = () => {
        if (!allChecked) {
            setSelected(payrolls);
        } else {
            setSelected([]);
        }
        setAllChecked(!allChecked);
    };

    useEffect(() => {
        setPayrolls(dummyPayrolls);
        setLoading(false);
        /*
        setLoading(true);
        getPaymentApi(employeeId, employerId)
            .then(({ data }) => {
                setPayrolls(data.scheduled);
            });
        getSingleEmployeeApi(employeeId, employerId)
            .then(({ data }) => {
                setEmployee(data)
            });
        */
    }, []);

    return (
        <>
            <div className="mb-3 text-3xl font-semibold select-none">Payrolls</div>
            {paying && <Modal>
                <ConfirmPayment payrolls={selected} cancelPayment={cancelPayment} />
            </Modal>}
            <div className="mb-3 flex justify-end space-x-2 items-center">
                <Button
                    className="disabled"
                    label="Pay Multiple Employees"
                    size="sm"
                    onClickHandler={() => setPaying(true)}
                    disabled={selected.length ? false : true}
                />
            </div>
            <div className="w-full grow flex flex-col overflow-hidden">
                <div className="w-full grid grid-cols-10 font-bold p-2 select-none">
                    <Checkbox value={allChecked} onChange={checkAll} />
                    <div className="col-span-2">Name</div>
                    <div className="col-span-2">Role</div>
                    <div>Payroll</div>
                    <div>Currency</div>
                    <div>Payday</div>
                </div>
                <div className="flex-auto h-0 overflow-auto overscroll-none">
                    {payrolls?.length ?
                        payrolls
                            .map((payroll) => (
                                <PayrollListItem
                                    key={payroll.id}
                                    data={payroll}
                                    selectPayroll={selectPayroll}
                                    unselectPayroll={unselectPayroll}
                                    allChecked={allChecked}
                                />
                            ))
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    );
};