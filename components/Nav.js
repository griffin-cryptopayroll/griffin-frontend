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

    return <nav className="bg-violet-300 w-full h-16 px-10 flex items-center justify-between">
        <div className="text-2xl font-semibold">GRIFFIN</div>
        <Button
            label="Deposit"
        />

    </nav>
}