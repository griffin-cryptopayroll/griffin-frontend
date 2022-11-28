import { useState, useEffect } from "react";
import { dummyPayrolls } from "../dummies";
import PayrollListItem from "./PayrollListItem";

export default function PayrollList(props) {
    const [payrolls, setPayrolls] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
        // TODO fetch payroll data
        setPayrolls(dummyPayrolls);
		setLoading(false);
        // TODO transform data
    }, []);

	return (
		<>	
			<div className="mb-3 text-3xl font-semibold select-none">Payrolls</div>
			<div className="w-full grow flex flex-col overflow-hidden">
                <div className="w-full grid grid-cols-12 font-bold p-2 select-none">
                    <div></div>
					<div className="col-span-2">Name</div>
                    <div className="col-span-2">Role</div>
					<div className="col-span-2">Currency</div>
                    <div className="col-span-2">Payday</div>
                    <div className="col-span-2">Payroll</div>
                </div>
                <div className="flex-auto h-0 overflow-auto overscroll-none">
                    {payrolls?.length ?
                        payrolls
                            .map((payroll, i) => ( // TODO once connected to backend, remove i
                                <PayrollListItem
                                    key={payroll.id + i}
                                    data={payroll}
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