import { useState } from "react";
import { pingApi } from "../api/authAPIs";
import Button from "./buttons/Button";
import WallectConnectButton from "./buttons/WallectConnectButton";

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
            <Button
                onClickHandler={() => {
                    pingApi().then(msg => { alert(msg) }).catch(err => { console.log(err) })
                }}
            >
                Ping
            </Button>
            <WallectConnectButton />
            {wallet &&
                <>
                    <Button
                        label={wallet}
                    />
                </>
            }

        </nav>)
}