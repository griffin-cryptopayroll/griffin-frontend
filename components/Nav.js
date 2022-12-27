import { useState } from "react";
import { pingApi } from "../api/authAPIs";
import Button from "./buttons/Button";


import { useWeb3Modal, Web3Button } from '@web3modal/react'

const navItems = [
    <Button
        key={1}
        label="Deposit"
        onClickHandler={() => {
            // handle deposit
        }}
    />,

]

export default function Navbar(props) {
    const [wallet, setWallet] = useState(null)

    return (
        <>
            <nav className="bg-white h-16 px-6 flex items-center justify-between">
                <div className="text-3xl font-semibold select-none">G R I F F I N</div>
                <Button
                    onClickHandler={() => {
                        pingApi().then(({ data }) => { alert(data.message) }).catch(err => { console.log(err) })
                    }}
                >
                    Ping
                </Button>
                <div className="flex space-x-2 items-center">
                    <Button
                        onClickHandler={() => { }}
                    >
                        Deposit
                    </Button>

                    <Button
                        onClickHandler={() => { }}
                    >
                        Withdraw
                    </Button>

                    <Web3Button

                    />
                </div>

            </nav>



        </>
    )
}