import {useState} from "react";
import Button from "../buttons/Button";
import Modal from "../Modal";
import ConfirmPayment from "./ConfirmPayment";

export default function PayrollListItem({data}) {
	const [paying, setPaying] = useState(false);

	const {name, role, currency, payday, payroll} = data;

	const cancelPayment = () => setPaying(false);

	return (
		<>
			{paying && <Modal>
				<ConfirmPayment payrolls={[data]} cancelPayment={cancelPayment} />
			</Modal>}
			<div className="w-full grid grid-cols-12 gap-2 rounded-lg items-center bg-white p-4 my-2 shadow">
				<input type="checkbox" />
				<div className="col-span-2">{name ?? "--"}</div>
				<div className="col-span-2">{role ?? "--"}</div>
				<div className="col-span-2">{currency ?? "--"}</div>
				<div className="col-span-2">{payday ?? "--"}</div>
				<div className="col-span-2">{payroll ?? "--"}</div>
				<Button
					className="col-span-2"
					label="Pay Now"
					onClickHandler={() => setPaying(true)}
				/>
			</div>
		</>
	);
};