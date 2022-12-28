import { pingApi } from "../api/authAPIs";
import Button from "./buttons/Button";
import { useAccount } from 'wagmi'


import { useWeb3Modal, Web3Button } from '@web3modal/react'
import WalletManager from "./buttons/WalletManager";

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
    const { isConnected } = useAccount()
    const { open } = useWeb3Modal()

    return (
        <>
            <nav className="bg-white h-16 px-6 flex items-center justify-between">
                <div className="text-3xl font-semibold select-none">G R I F F I N</div>
                <Button
                    size="sm"
                    onClickHandler={() => {
                        pingApi().then(({ data }) => { alert(data.message) }).catch(err => { console.log(err) })
                    }}
                >
                    Ping
                </Button>
                <div className="flex space-x-2 items-center">
                    {isConnected &&
                        <Button onClickHandler={() => { }}>
                            Deposit
                        </Button>
                    }
                    {isConnected &&
                        <Button onClickHandler={() => { }}>
                            Withdraw
                        </Button>
                    }
                    {/* <Web3Button balance="show"/> */}
                    <WalletManager />
                </div>

            </nav>



        </>
    )
}