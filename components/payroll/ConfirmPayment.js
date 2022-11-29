import { XMarkIcon } from "@heroicons/react/24/solid";
import { iconStyle } from "../../styles/globals";
import Button from "../buttons/Button";

export default function ConfirmPayment({payrolls, cancelPayment}) {
	return (
		<div className="flex-col">
			<div className="flex justify-between">
				<div>You are about to pay</div>
				<XMarkIcon
					className={iconStyle + " cursor-pointer"}
					onClick={() => cancelPayment()}
				/>
			</div>
			<table className="w-full my-5">
				{payrolls.map((payroll) => (
					<tr key={payroll.id}
						className="border border-transparent border-y-gray-300" >
						<td className="py-3">{payroll.name}</td>
						<td>{`$${payroll.payroll}`}</td>
					</tr>
				))}
				{payrolls.length > 1 ? 
					<tr>
						<td className="py-3">Total</td>
						<td>{`$${payrolls.reduce((prev, cur) => prev + cur.payroll, 0)}`}</td>
					</tr> 
					: 
					<></>
				}
			</table>
			<div className="flex justify-between">
				<Button label="Confirm" onClickHandler={()=>{}} />
				<Button className="bg-white" label="Cancel" onClickHandler={() => cancelPayment()} />
			</div>
		</div>
	);
}