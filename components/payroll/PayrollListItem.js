import { useState, useEffect } from "react";
import Button from "../buttons/Button";
import Modal from "../Modal";
import ConfirmPayment from "./ConfirmPayment";
import Checkbox from "../Checkbox";

export default function PayrollListItem({ data, selectPayroll, unselectPayroll, allChecked }) {
	const { id, name, role, currency, payday, payroll } = data;

	const [paying, setPaying] = useState(false);
	const [checked, setChecked] = useState(false);

	const cancelPayment = () => setPaying(false);
	const check = () => {
		if (!checked) {
			selectPayroll(data);
		} else {
			unselectPayroll(id);
		}
		setChecked(!checked);
	};

	useEffect(() => {
		setChecked(allChecked);
	}, [allChecked]);

	return (
		<>
			{paying && <Modal>
				<ConfirmPayment payrolls={[data]} cancelPayment={cancelPayment} />
			</Modal>}
			<div className="w-full grid grid-cols-10 gap-2 rounded-lg items-center bg-white p-4 my-2 shadow">
				<Checkbox value={checked} onChange={check} />
				<div className="col-span-2">{name ?? "--"}</div>
				<div className="col-span-2">{role ?? "--"}</div>
				<div>{payroll ?? "--"}</div>
				<div>{currency ?? "--"}</div>
				<div>{payday ?? "--"}</div>
				<Button
					className="col-span-2"
					label="Pay Now"
					size="sm"
					onClickHandler={() => setPaying(true)}
				/>
			</div>
		</>
	);
};