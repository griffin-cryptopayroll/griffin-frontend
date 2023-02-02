import { useState, useEffect } from "react";
import { dummyPayrolls } from "../dummies";
import PayrollListItem from "./PayrollListItem";
import Button from "../buttons/Button";
import ConfirmPayment from "./ConfirmPayment";
import Modal from "../Modal";
import Checkbox from "../Checkbox";
import { getUpcomingPayrollsApi, getPastPayrollsApi } from "../../api/payrollAPIs";

// TO DO: get employer ID
const employeeId = "08e42c43-9ea2-4ba3-aab3-93d8f5d66d94";
const employerId = "2cb6b685-47b0-4299-bf6a-cb9bd8248f0d";
const interval = "1m";

export default function PayrollList(props) {
    const [payrolls, setPayrolls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedPayrolls, setSelectedPayrolls] = useState([]);
    const [paying, setPaying] = useState(false);
    const [allChecked, setAllChecked] = useState(false);
    const [upcomingSelected, setUpcomingSelected] = useState(true);
    const [pastSelected, setPastSelected] = useState(false);

    const selectPayroll = (payroll) => {
        setSelectedPayrolls(payrolls => [...payrolls, payroll]);
    };

    const unselectPayroll = (targetId) => {
        setSelectedPayrolls(payrolls => payrolls.filter(({ id }) => id != targetId));
    };

    const cancelPayment = () => setPaying(false);

    const checkAll = () => {
        if (!allChecked) {
            setSelectedPayrolls(payrolls);
        } else {
            setSelectedPayrolls([]);
        }
        setAllChecked(!allChecked);
    };

    const onFilterPayrolls = () => {
        if (!upcomingSelected) {
            getUpcomingPayrollsApi(employerId, interval)
                .then(({ data }) => {
                    setPayrolls(data.future);
                });
        } else if (!pastSelected) {
            getPastPayrollsApi(employerId, interval)
                .then(({ data }) => {
                    setPayrolls(data.past);
                });
        }
        setUpcomingSelected(!upcomingSelected);
        setPastSelected(!pastSelected);
    };

    useEffect(() => {
        setLoading(true);
        getUpcomingPayrollsApi(employerId, interval)
            .then(({ data }) => {
                setLoading(false);
                setPayrolls(data.future);
            });
    }, []);

    return (
        <>
            <div className="flex justify-between">
                <div className="flex mb-5 space-x-4 items-center">
                    <div className="mr-8 text-3xl font-semibold select-none">Payroll</div>
                    <Button
                        label="Upcoming"
                        size="sm"
                        onClickHandler={onFilterPayrolls}
                        inverted={!upcomingSelected}
                        color={upcomingSelected ? 'solidPurple' : 'outlinePurle'}
                    />
                    <Button
                        label="Past"
                        size="sm"
                        onClickHandler={onFilterPayrolls}
                        inverted={!pastSelected}
                        color={pastSelected ? 'solidPurple' : 'outlinePurle'}
                    />
                </div>
                <div className="mb-3 ">
                    <Button
                        className="disabled"
                        label="Pay Multiple"
                        size="md"
                        onClickHandler={() => setPaying(true)}
                        disabled={selectedPayrolls.length ? false : true}
                    />
                </div>
            </div>
            {paying && <Modal>
                <ConfirmPayment payrolls={selectedPayrolls} cancelPayment={cancelPayment} />
            </Modal>}
            <div className="w-full grow flex flex-col overflow-hidden">
                <div className="w-full mx-2 grid grid-cols-9 font-bold p-2 select-none">
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