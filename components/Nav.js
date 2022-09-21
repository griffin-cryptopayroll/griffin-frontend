import Button from "./Button";

const navItems = [
    <Button
        label="Deposit"
        onClickHandler={() => {
            // handle deposit
        }}
    />,

]

export default function Navbar(props) {

    return (
        <nav className="bg-white h-16 px-6 flex items-center justify-between">
            <div className="text-3xl font-semibold">G R I F F I N</div>
            <Button
                label="Connect Wallet"
            />

        </nav>)
}