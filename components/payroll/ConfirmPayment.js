import { XMarkIcon } from "@heroicons/react/24/solid";
import { iconStyle } from "../../styles/globals";
import Button from "../buttons/Button";
import { getPriceApi } from "../../api/priceAPIs";

function getTotalUSD(payrolls) {
	const ETH2USD = 1271;
	const USDC2USD = 1;
	let total = 0;
	for (let payroll of payrolls) {
		if (payroll.currency === "ETH") {
			total += payroll.payroll * ETH2USD;
		} else if (payroll.currency === "USDC") {
			total += payroll.payroll * USDC2USD;
		}
	}
	return total;
}

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
						<td>{`${payroll.payroll}`}</td>
						<td>{`${payroll.currency}`}</td>
					</tr>
				))}
				{payrolls.length > 1 ? 
					<tr>
						<td className="py-3">Total</td>
						<td>{`$${getTotalUSD(payrolls)}`}</td>
					</tr> 
					: 
					null
				}
			</table>
			<div className="flex justify-between">
				<Button label="Confirm" onClickHandler={()=>{}} />
				<Button className="bg-white" label="Cancel" onClickHandler={() => cancelPayment()} />
			</div>
		</div>
	);
}