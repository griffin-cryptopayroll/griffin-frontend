export default function EmployeeListItem({ data }) {

    const handlePayment = () => {

    }

    const handleDelete = () => {

    }

    const { key, name, email, position, account, payroll, curr, date, secLeft } = data

    return (
        <div className="w-full grid grid-cols-6 gap-6 rounded-lg items-center bg-white p-4 my-2">
            <div>{name ?? "--"}</div>
            <div>{position ?? "--"}</div>
            <div>{email ?? "--"}</div>
            <div>{payroll ?? "--"}</div>
            <div>{curr ?? "--"}</div>
            <div>{date ?? "--"}</div>
            {/* <div>
                <Button
                    label="Pay"
                    size="sm"
                    onClickHander={handlePayment}
                />
            </div> */}
        </div>
    )
}