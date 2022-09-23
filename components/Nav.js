import { useState } from "react";
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
    const [wallet, setWallet] = useState(null)

    return (
        <nav className="bg-white h-16 px-6 flex items-center justify-between">
            <div className="text-3xl font-semibold select-none">G R I F F I N</div>
            {wallet ?
                <>
                    <Button
                        label={wallet}
                    />
                </>
                :
                <Button
                    label="Connect Wallet"
                />
            }

        </nav>)
}