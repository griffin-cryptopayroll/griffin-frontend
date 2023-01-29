import { useState, useEffect } from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { iconStyle } from "../../styles/globals";
import Button from "../buttons/Button";
import { getPriceApi } from "../../api/priceAPIs";

function getTotalPayroll(payrolls, price) {
	let total = 0;
	for (let payroll of payrolls) {
		if (payroll.currency === "ETH") {
			total += payroll.payroll * price.ethusdt;
		} else if (payroll.currency === "MATIC") {
			total += payroll.payroll * price.maticusdt;
		} else if (payroll.currency === "USDC") {
			total += payroll.payroll * price.usdcusdt;
		}
	}
	return total;
}

export default function ConfirmPayment({payrolls, cancelPayment}) {
	const [price, setPrice] = useState({
		"ethusdt": 0,
		"maticusdt": 0,
		"usdcusdt": 0
	});

	useEffect(() => {
		getPriceApi()
			.then(({ data }) => {
				setPrice(data);
			});
	}, []);

	const totalPayroll = new Intl.NumberFormat("en-US", {
		style: "currency", 
		currency: "USD", 
		minimumFractionDigits: 2,
		maximumFractionDigits: 2});

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
						<td>{totalPayroll.format(getTotalPayroll(payrolls, price))}</td>
					</tr> 
					: 
					null
				}
			</table>
			<div className="flex justify-between">
				<Button label="Confirm" onClickHandler={()=>{}} />
				<Button label="Cancel" onClickHandler={() => cancelPayment()} inverted />
			</div>
		</div>
	);
}