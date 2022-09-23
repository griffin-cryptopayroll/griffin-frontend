export default function TotalBalance() {
    const amount = 100000

    return (
        <div className="font-semibold text-4xl text-slate-800">
            ${amount.toLocaleString()}
        </div>
    )
}