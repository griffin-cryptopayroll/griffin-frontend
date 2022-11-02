import { useEffect, useState } from "react"

export default function UpcomingPayments() {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        // fetch upcoming payments (by entry amout? by time scheduled?)

        setEntries([
            {
                gid: "1001",
                name: "VB",
                role: "visionary",
                amount: 1.000001,
                currency: "ETH",
                date: "11/1"
            },
            {
                gid: "1005",
                name: "Yuheng",
                role: "intern",
                amount: 1.00000,
                currency: "USDC",
                date: "11/11"
            }
        ])
    }, [])

    return (
        <>
            {/* <div className="w-full grow flex flex-col overflow-hidden"> */}
            <div className="w-full grid grid-cols-4 gap-1 p-2 select-none even:bg-stone-100">
                {entries.map(entry => (
                    <>
                        <div>{entry.name}</div>
                        <div>{entry.role}</div>
                        <div>{entry.amount} {entry.currency}</div>
                        <div>{entry.date}</div>
                    </>
                ))}
            </div>
            {/* </div> */}
            {/* <div>More</div> */}
        </>
    )
}